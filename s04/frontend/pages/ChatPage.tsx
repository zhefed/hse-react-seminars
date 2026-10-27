import { useEffect, useState } from 'react'
import type { Message } from '../src/types'
import { getMessages, sendMessage } from '../api/messageApi'
import { connectSocket } from '../api/socketClient'
import { handleError } from '../helpers/handleError'
import { MessageList } from '../components/MessageList'
import { MessageInput } from '../components/MessageInput'

type Props = {
    token: string
}

// сообщение может прийти и из ответа POST, и по сокету — добавляем без дублей
function addUnique(list: Message[], message: Message): Message[] {
    return list.some((m) => m.id === message.id) ? list : [...list, message]
}

export function ChatPage({ token }: Props) {
    const [messages, setMessages] = useState<Message[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [socketStatus, setSocketStatus] = useState<string>('disconnected')

    useEffect(() => {
        let active = true

        setLoading(true)
        setError('')

        getMessages(token)
            .then((history) => {
                if (!active) return
                // новые сообщения по сокету могли прийти раньше истории
                setMessages((prev) => history.reduce(addUnique, prev))
            })
            .catch((e) => active && setError(handleError(e)))
            .finally(() => active && setLoading(false))

        const socket = connectSocket(token, {
            onMessage: (message) => setMessages((prev) => addUnique(prev, message)),
            onStatus: setSocketStatus
        })

        return () => {
            active = false
            socket.disconnect()
        }
    }, [token])

    const handleSend = async (text: string) => {
        setError('')

        try {
            const message = await sendMessage(token, text)
            setMessages((prev) => addUnique(prev, message))
        } catch (e) {
            setError(handleError(e))
        }
    }

    return (
        <div>
            <h2>Чат</h2>
            <p>Статус сокета: {socketStatus}</p>
            {loading ? <p>Загрузка сообщений...</p> : null}
            {error ? <p style={{ color: 'red' }}>{error}</p> : null}
            <MessageList messages={messages}/>
            <div style={{ marginTop: '12px' }}>
                <MessageInput onSend={handleSend} disabled={socketStatus !== 'connected'}/>
            </div>
        </div>
    )
}

export default ChatPage

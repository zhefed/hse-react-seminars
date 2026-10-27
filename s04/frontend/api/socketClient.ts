import type { Message } from "../src/types"

const WS_URL = import.meta.env?.VITE_WS_URL || "ws://localhost:3001";

type SocketCallbacks = {
    onMessage?: (message: Message) => void;
    onStatus?: (status: string) => void;
}

export function connectSocket(token: string, { onMessage, onStatus }: SocketCallbacks) {
    const socket = new WebSocket(WS_URL)

    socket.onopen = () => onStatus?.('connected')
    socket.onclose = () => onStatus?.('disconnected')
    socket.onerror = () => onStatus?.('disconnected')

    socket.onmessage = (event) => {
        try {
            const data = JSON.parse(event.data)
            if (data.type === 'message:new') {
                onMessage?.(data.payload as Message)
            }
        } catch {}
    }

    return {
        sendMessage: (text: string) => {
            if (socket.readyState !== WebSocket.OPEN) {
                throw new Error('Сокет не подключён')
            }
            socket.send(JSON.stringify({type: 'message:send', payload: {text, token}}))
        },
        disconnect: () => socket.close()
    }
}

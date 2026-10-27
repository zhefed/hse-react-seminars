import type { Message } from "../src/types";

type Props = {
    messages: Message[];
};

export function MessageList({ messages }: Props) {
    if (!messages?.length) {
        return <p>Нет сообщений</p>
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {messages.map((message) => (
                <div key={message.id} className="card">
                    <h3 style={{ margin: 0, fontSize: '16px' }}>{message.author}</h3>
                    <div>{message.text}</div>
                    <span style={{ fontSize: '12px', color: 'var(--muted-2)' }}>
                        {new Date(message.createdAt).toLocaleString()}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default MessageList;
import React, { useState } from "react";

type Props = {
    onSend: (text: string) => void;
    disabled?: boolean;
};

export function MessageInput({ onSend, disabled }: Props) {
    const [text, setText] = useState<string>("");

    const handleSubmit = (event: React.SubmitEvent) => {
        event.preventDefault()

        const value = text.trim()
        if (!value)
            return
        onSend(value)
        setText('')
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault()
            event.currentTarget.form?.requestSubmit()
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", width: "100%" }}>
            <textarea
                className="message-input"
                rows={1}
                placeholder="Введите сообщение"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{ flex: 1, minWidth: 0, padding: "8px" }}
                disabled={disabled}
            />
            <button type="submit" disabled={disabled || !text.trim()} style={{ width: 'auto', alignSelf: 'flex-end' }}>
                Отправить
            </button>
        </form>
    );
}

export default MessageInput;

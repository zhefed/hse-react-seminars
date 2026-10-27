export function handleError(error: unknown): string {
    if (typeof error === "string") return error;
    if (!error) return "Unknown error";

    const anyError = error as any;
    if (anyError.response?.data?.message) {
        return anyError.response.data.message as string;
    }

    if (anyError.isAxiosError && !anyError.response) {
        return 'Нет соединения с сервером'
    }

    if (anyError instanceof TypeError) {
        return 'Нет соединения с сервером'
    }

    if (anyError.message) {
        return anyError.message as string;
    }

    return "Request failed";
}

export async function parseResponse<T>(response: Response): Promise<T> {
    const text = await response.text()

    let data: any = null
    if (text) {
        try {
            data = JSON.parse(text)
        } catch {
            throw new Error('Некорректный ответ сервера')
        }
    }

    if (!response.ok) {
        if (response.status === 401) {
            throw new Error(data?.message || 'Требуется авторизация')
        }
        throw new Error(data?.message || `Ошибка ${response.status}`)
    }

    if (data === null) {
        throw new Error('Пустой ответ сервера')
    }

    return data as T
}

import { useState } from 'react'
import { LoginPage } from '../pages/LoginPage'
import { ProfilePage } from '../pages/ProfilePage'
import { ChatPage } from '../pages/ChatPage'
import { clearToken, getToken } from '../helpers/authStorage'
import type { User } from './types'

type Tab = 'login' | 'profile' | 'chat'

function App() {
    const [token, setToken] = useState<string | null>(getToken())
    const [tab, setTab] = useState<Tab>(token ? 'chat' : 'login')

    const activeTab: Tab = token ? tab : 'login'

    function handleLogin(newToken: string, _user: User) {
        setToken(newToken)
        setTab('chat')
    }

    function handleLogout() {
        clearToken()
        setToken(null)
        setTab('login')
    }

    return (
        <div className="page">
            <header className="header">
                <h1>Messenger Mini</h1>
                <nav className="nav">
                    <button
                        type="button"
                        className={activeTab === 'login' ? 'tab active' : 'tab'}
                        onClick={() => setTab('login')}
                        disabled={!!token}
                    >
                        Вход
                    </button>
                    <button
                        type="button"
                        className={activeTab === 'profile' ? 'tab active' : 'tab'}
                        onClick={() => setTab('profile')}
                        disabled={!token}
                    >
                        Профиль
                    </button>
                    <button
                        type="button"
                        className={activeTab === 'chat' ? 'tab active' : 'tab'}
                        onClick={() => setTab('chat')}
                        disabled={!token}
                    >
                        Чат
                    </button>
                </nav>
                {token && (
                    <button type="button" className="logout" onClick={handleLogout}>
                        Выйти
                    </button>
                )}
            </header>

            {activeTab === 'login' && <LoginPage onLogin={handleLogin}/>}
            {token && activeTab === 'profile' && <ProfilePage token={token}/>}
            {token && activeTab === 'chat' && <ChatPage token={token}/>}
        </div>
    )
}

export default App

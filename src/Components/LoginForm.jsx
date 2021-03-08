import React, { useState } from 'react'
import axios from 'axios';



const projectID = '4b2e4854-8465-46cd-9b34-39962716c0fd';
const LoginForm = () => {
    const [userName, setUserName] = useState('');
    const [passwd, setPasswd] = useState('');
    const [error, setError] = useState('');
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPasswd(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start chatting</span>
                        </button>
                    </div>
                </form>
                <h1> Eror</h1>
            </div>
        </div>
    )
}

export default LoginForm

import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './Components/ChatFeed.jsx'
import './App.css'

import React from 'react';

function App(props) {
    return (
        <div>
            <ChatEngine
                height="100vh"
                projectID="4b2e4854-8465-46cd-9b34-39962716c0fd"
                userName="ilham"
                userSecret="12345"
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            />
        </div>
    );
}

export default App;
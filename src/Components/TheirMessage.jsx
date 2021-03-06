import React from 'react'

const TheirMessage = ({ lastMessage, message }) => {
    const isFiristMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    return (
        <div>

        </div>
    )
}

export default TheirMessage

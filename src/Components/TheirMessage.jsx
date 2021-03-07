import React from 'react'

const TheirMessage = ({ lastMessage, message }) => {
    const isFiristMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    return (
        <div className="message-row">
            {isFiristMessageByUser && (
                <div
                    className="message-avatar"
                    style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
                />
            )}
            {message?.attachment?.lenght > 0
                ? (
                    <img
                        src={message.attachment[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{ marginLeft: isFiristMessageByUser ? '4px' : '48px' }} />
                ) : (
                    <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFiristMessageByUser ? '4px' : '48px' }}>
                        {message.text}
                    </div>
                )

            }

        </div>
    )
}

export default TheirMessage

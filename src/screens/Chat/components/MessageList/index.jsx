import React from 'react';
import dummy from './dummy.json';
import avatar from './../../../../assets/img/avatar.jpg';
const MessageList = props => {
    const messages = dummy
    return (
        <div className="cvs-content__content">
            {messages.map(message => (
                <div className={`${message.align}-message`}>
                    <img className="message-avatar" src={avatar} alt="" />
                    <div className="message">{message.message}</div>
                </div>
            ))}
        </div>
    )
}

export default MessageList;
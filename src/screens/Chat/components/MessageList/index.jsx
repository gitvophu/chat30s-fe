import React from 'react';
import avatar from './../../../../assets/img/avatar.jpg';
const MessageList = props => {
    const messages = props.messages;
    console.log(messages);
    return (
        <div className="cvs-content__content">
            {messages.map((message, index) => (
                <div className={`${message.align}-message`} key={index}>
                    <img className="message-avatar" src={avatar} alt="" />
                    <div className="message">{message.message}</div>
                </div>
            ))}
        </div>
    )
}

export default MessageList;
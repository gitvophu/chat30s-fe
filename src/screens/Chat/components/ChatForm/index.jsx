import React, { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import * as clientEmits from '../../../../socket/constans/clientEmits';
import socket from './../../../../socket';
const ChatForm = (props) => {
    const [message, setMessage] = useState('');
    const onClickSendMessage = () => {
        socket.emit(clientEmits.SEND_MESSAGE, { message });
        if (typeof props?.onSubmit === 'function') {
            props.onSubmit();
        }
        setMessage('');
    }
    return (
        <div className="cvs-content__form">
            <input type="text" className="message-input" value={message} onChange={event => setMessage(event.target.value)} />
            <button className="send-btn" onClick={() => { onClickSendMessage() }}>
                <SendIcon color="primary" className="send-btn-icon" />
            </button>
        </div>
    )
}
export default ChatForm;
import React, { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import * as clientEmits from '../../../../socket/constans/clientEmits';
import * as serverEmits from '../../../../socket/constans/serverEmits';
import socket from '../../../../socket';
import {SendMessageResult} from '../../../../types/Message';

export type Props = {
    onSendMessage: (result: SendMessageResult)=>void
}
const ChatForm: React.FC<Props> = (props) => {
    const {onSendMessage} = props;
    const [message, setMessage] = useState<string>('');
    const onClickSendMessage = () => {
        const message2 = message.trim();
        if(message2){
            socket.emit(clientEmits.SEND_MESSAGE, {message: message2});
            socket.on(serverEmits.SAVE_MESSAGE, (data: any)=>{
                onSendMessage({
                    message: data.message
                });
            });
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
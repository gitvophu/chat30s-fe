import React, { useEffect, useState } from 'react';
import avatar from './../../assets/img/avatar.jpg';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CreateIcon from '@material-ui/icons/Create';
import './style.scss';
import ChatForm from './components/ChatForm';
import ConversationList from './components/ConversationList';
import MessageList from './components/MessageList';
import {Message} from './components/MessageList/types';
import { SendMessageResult } from './../../types/Message';
// import dummy from './components/MessageList/dummy.json';

const Chat = () => {
    useEffect(() => {
        
    }, [])
    const [messages, setMessages] = useState<Message[]>([]);

    const onSendMessage = (result: SendMessageResult)=>{
        const messages2 = [...messages];
        debugger;
        
        messages2.push({
            id: NaN,
            user: {
                name: ""
            },
            message: result.message,
            align: "right"
        });
        setMessages(messages2);
    }
    
    return (
        <div className="Chat__container">
            <div className="cvs-list">
                <div className="cvs-list__header">
                    <div className="me">
                        <img className="my-avatar" src={avatar} alt="" />
                        <span className="my-name">Phú Võ</span>
                    </div>
                    <ul className="menu">
                        <li>
                            <MoreHorizIcon />
                        </li>
                        <li>
                            <VideoCallIcon />
                        </li>
                        <li>
                            <CreateIcon />
                        </li>
                    </ul>
                </div>
                <div className="search-form">
                    <form action="">
                        <input type="text" placeholder="Tìm kiếm trên Messenger" />
                    </form>
                </div>
                <ConversationList />
            </div>
            <div className="cvs-content">
                <div className="cvs-content__header">
                    <img className="cvs-content__header__avatar" src={avatar} alt="" />
                    <span className="cvs-content__header__name">Mr. Adam</span>
                </div>
                <MessageList messages={messages}/>
                <ChatForm onSendMessage={onSendMessage} />
            </div>
        </div>
    )
}
export default Chat;
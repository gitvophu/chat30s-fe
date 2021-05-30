import React, { useEffect, useState } from 'react';
import avatar from './../../assets/img/avatar.jpg';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CreateIcon from '@material-ui/icons/Create';
import './style.scss';
import socket from './../../socket';
import ChatForm from './components/ChatForm';
import ConversationList from './components/ConversationList';
import MessageList from './components/MessageList';
const Chat = () => {
    useEffect(() => {

    }, [])

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
                <MessageList />
                <ChatForm />
            </div>
        </div>
    )
}
export default Chat;
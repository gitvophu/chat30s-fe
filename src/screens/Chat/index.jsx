import React from 'react';
import avatar from './../../assets/img/avatar.jpg';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CreateIcon from '@material-ui/icons/Create';
import style from './style.scss';
import appcss from './../../App.css';
const Chat = () => {
    console.log(style, appcss);
    return (
        <div className={style.container}>
            <div className="cvs-list">
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
            <div className="cvs-content"></div>
        </div>
    )
}
export default Chat;
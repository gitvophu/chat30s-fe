import React from 'react';
import avatar from './../../assets/img/avatar.jpg';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import CreateIcon from '@material-ui/icons/Create';
import SendIcon from '@material-ui/icons/Send';
import './style.scss';
const Chat = () => {
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
                <ul className="cvs-list__items">
                    <li className="cvs-list__item">
                        <div className="thumbnail">
                            <img src={avatar} alt="" />
                            <div className="status"></div>
                        </div>
                        <div className="cvs-list__item__info">
                            <div className="cvs-list__item__info__name">Mr. Adam</div>
                            <div className="cvs-list__item__info__last-msg">Hi. Good morning</div>
                        </div>
                    </li>
                    <li className="cvs-list__item">
                        <div className="thumbnail">
                            <img src={avatar} alt="" />
                            <div className="status"></div>
                        </div>
                        <div className="cvs-list__item__info">
                            <div className="cvs-list__item__info__name">Mr. Ben</div>
                            <div className="cvs-list__item__info__last-msg">Hi. Good morning</div>
                        </div>
                    </li>
                    <li className="cvs-list__item">
                        <div className="thumbnail">
                            <img src={avatar} alt="" />
                            <div className="status"></div>
                        </div>
                        <div className="cvs-list__item__info">
                            <div className="cvs-list__item__info__name">Mr. Canna</div>
                            <div className="cvs-list__item__info__last-msg">Hi. Good morning</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="cvs-content">
                <div className="cvs-content__header">
                    <img className="cvs-content__header__avatar" src={avatar} alt="" />
                    <span className="cvs-content__header__name">Mr. Adam</span>
                </div>
                <div className="cvs-content__content">
                    <div class="left-message">
                        <img className="message-avatar" src={avatar} alt="" />
                        <div className="message">Hi. How are you?</div>
                    </div>
                    <div class="right-message">
                        <div className="message">Hi. I'm fine!!</div>
                        <img className="message-avatar" src={avatar} alt="" />
                    </div>
                    <div></div>
                </div>
                <div className="cvs-content__form">
                    <input type="text" className="message-input" />
                    <button className="send-btn">
                        <SendIcon color="primary" className="send-btn-icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Chat;
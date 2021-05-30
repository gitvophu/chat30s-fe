import React from 'react';
import avatar from './../../../../assets/img/avatar.jpg';
const ConversationList = props => {
    return (
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
    )
}
export default ConversationList;
import React from 'react';
import './style.scss';
import logo from './../../assets/img/messenger.png';
import messenger_demo from './../../assets/img/messenger_demo.png';
const Register = () => {
    return (<div className="container">
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="menu">
                <ul className="menu__list">
                    <li><a href="#">Phòng họp mặt</a></li>
                    <li><a href="#">Tính năng</a></li>
                    <li><a href="#">Quyền riêng tư & an toàn</a></li>
                    <li><a href="#">Dành cho nhà phát triển</a></li>
                </ul>
            </div>

        </div>
        <div className="content">
            <div className="content__left">
                <h1>Tụ tập mọi lúc, mọi nơi</h1>
                <span>Với Messenger, việc kết nối với những người mình yêu mến thật đơn giản và thú vị.
</span>
                <div className="content__form">
                    <form action="post">
                        <div>
                            <input type="text" placeholder="Email hoặc số điện thoại" />
                        </div>

                        <div>
                            <input type="text" placeholder="Mật khẩu" />
                        </div>
                        <button>Đăng nhập</button>
                        <a href="">Quên mật khẩu</a>
                        <div className="content__form__keep_login">

                            <input type="checkbox" /> Duy trì đăng nhập
                        </div>
                    </form>
                </div>
            </div>
            <div className="content__right">
                <img src={messenger_demo} alt="" />
            </div>


        </div>
        <footer>
            <div className="footer__copyright">© Facebook 2021.
Logo của Apple và Google Play là nhãn hiệu hàng hóa thuộc chủ sở hữu tương ứng.</div>
            <ul className="footer__chinhsach">
                <li><a href="#">Chính sách dữ liệu</a></li>
                <li><a href="#">Điều khoản</a></li>
            </ul>
        </footer>
    </div>)
}
export default Register;
import React from 'react';

const LoginForm = () => {
    return (
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
    )
}

export default LoginForm;
import React from 'react';
const RegisterForm = () => {
    return (
        <form action="post">
            <div>
                <input type="text" placeholder="Email hoặc số điện thoại" />
            </div>

            <div>
                <input type="text" placeholder="Mật khẩu" />
            </div>
            <button>Tạo tài khoản</button>
        </form>
    )
}
export default RegisterForm;
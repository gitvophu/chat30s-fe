import { AxiosResponse } from 'axios';
import React, { useState } from 'react';
import { login } from '../../../lib/api';
import { LoginUser } from '../../../types/User';
type Props = {
    onLogin: (user: LoginUser) => void
}
const LoginForm: React.FC<Props> = (props) => {
    const onLogin = props.onLogin;
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const onClickLogin  = async ()=>{
        const user: LoginUser = {
            username, password
        }
        onLogin(user);
    }
    
    return (
        <form action="post">
            <div>
                <input type="text" placeholder="Email hoặc số điện thoại" value={username} onChange={event => setUsername(event.target.value)} />
            </div>

            <div>
                <input type="password" placeholder="Mật khẩu" value={password} onChange={event => setPassword(event.target.value)} />
            </div>
            <button type="button" onClick={onClickLogin}>Đăng nhập</button>
            <a href="#/">Quên mật khẩu</a>
            <div className="content__form__keep_login">

                <input type="checkbox" /> Duy trì đăng nhập
            </div>
        </form>
    )
}

export default LoginForm;
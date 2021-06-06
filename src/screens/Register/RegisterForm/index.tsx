import React, { useState } from 'react';
import { RegisterUser } from '../../../types/User';
export type Props = {
    onRegisterUser: (user: RegisterUser)=> void
}
const RegisterForm: React.FC<Props> = (props) => {
    const onRegisterUser = props.onRegisterUser;
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [fullname, setFullname] = useState<string>('');
    const onClickCreateAccount = ()=>{
        const user: RegisterUser = {
            username,
            password,
            fullname,
        }
        onRegisterUser(user);
    }
    return (
        <form action="post">
            <div>
                <input type="text" placeholder="Tên đầy đủ của bạn" value={fullname} onChange={(event)=>{setFullname(event.target.value)}}/>
            </div>
            <div>
                <input type="text" placeholder="Email hoặc số điện thoại" value={username} onChange={(event)=>{setUsername(event.target.value)}}/>
            </div>
            <div>
                <input type="password" placeholder="Mật khẩu" value={password} onChange={(event)=>setPassword(event.target.value)}/>
            </div>
            <button type="button" onClick={()=>onClickCreateAccount()}>Tạo tài khoản</button>
        </form>
    )
}
export default RegisterForm;
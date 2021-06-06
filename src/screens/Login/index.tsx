import React from 'react';
import './style.scss';
import LoginLayout from './Layout';
import LoginForm from './LoginForm';
import {LoginUser} from '../../types/User';
import { login } from '../../lib/api';
import { AxiosResponse } from 'axios';
import {useToasts} from 'react-toast-notifications'
const Login = () => {
    const {addToast} = useToasts()
    const onLogin = async (user: LoginUser)=>{
        try{
            const response = await login(user);
            onLoginSuccess(response);
        }catch(e){
            console.log(e);
            addToast("Có lỗi xảy ra. " + e.message);
        }
    }
    const onLoginSuccess = (response: AxiosResponse):void=>{
        
    }
    return (
        <LoginLayout form={<LoginForm onLogin={onLogin} />} />
    )
}
export default Login;
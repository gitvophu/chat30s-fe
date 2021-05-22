import React from 'react';
import './style.scss';
import logo from './../../assets/img/messenger.png';
import messenger_demo from './../../assets/img/messenger_demo.png';
import LoginLayout from './Layout';
import LoginForm from './LoginForm';
const Login = () => {
    return (
        <LoginLayout form={<LoginForm />} />
    )
}
export default Login;
import React from 'react';
import LoginLayout from './../Login/Layout';
import RegisterFrom from './RegisterFrom';
const Register = () => {
    return (
        <LoginLayout form={<RegisterFrom />} />
    )
}

export default Register;
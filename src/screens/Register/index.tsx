import React from 'react';
import LoginLayout from './../Login/Layout';
import RegisterFrom from './RegisterForm';
import { RegisterUser } from '../../types/User';
import { registerUser } from '../../lib/api';
import { AxiosResponse } from 'axios';
import { useHistory } from 'react-router';
import {useToasts} from 'react-toast-notifications'
import {ApiResponse} from './../../types/Http/Response';
import {StatusCodes} from 'http-status-codes'
const Register = () => {
    const history = useHistory();
    const {addToast} = useToasts();
    const onRegisterUser = async (user: RegisterUser)=>{
        try{
            let response = await registerUser(user);
            registerUserSuccess(response);
        }catch(e){
            debugger;
            console.log(e);
            addToast('Có lỗi xảy ra. ' + e.message, {appearance:'error',autoDismiss:true});
        }
    }
    const registerUserSuccess = (response: AxiosResponse)=>{
        const responseData: ApiResponse = response.data;
        if(responseData.statusCode === StatusCodes.OK){
            addToast("Tạo tài khoản thành công. Giờ bạn có thể đăng nhập vào Messenger.", {appearance:'success', autoDismiss:true});
            history.push('/login');
        }else{
            addToast("Tạo tài khoản thất bại. " + responseData.message, {appearance:'error', autoDismiss:true});
        }
        
    }
    return (
        <LoginLayout form={<RegisterFrom onRegisterUser={onRegisterUser} />} />
    )
}

export default Register;
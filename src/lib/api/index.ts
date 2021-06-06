import axios, { AxiosResponse } from 'axios';
import { HOST } from '../../config';
import { LoginUser, RegisterUser } from '../../types/User';
export const registerUser = async (user: RegisterUser): Promise<AxiosResponse> => {
    const response = await axios.post(HOST + '/api/users/register', user, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response;
}

export const login = async (user: LoginUser): Promise<AxiosResponse> => {
    const response = await axios.post(HOST + '/api/login', user, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return response;
}
import { ISignupState } from '../interfaces';
import { ILoginState } from '../interfaces';
import axiosInstance from './axios.config';

export async function loginUser(data: ILoginState){
    const res = await axiosInstance.post('/login', data)
    return res.data
}

export async function registerUser(data: ISignupState){
    const res = await axiosInstance.post('/signup', data)
    return res.data
}

export async function forgotPassword(email: string){
    const res = await axiosInstance.post('/forgot-password', {email})
    return res.data
}

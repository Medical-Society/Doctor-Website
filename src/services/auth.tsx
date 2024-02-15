import axios from 'axios';
import { ISignupState } from '../interfaces';
import { ILoginState } from '../interfaces';

export async function loginUser(data: ILoginState){
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/login`, data)
    return res.data
}

export async function registerUser(data: ISignupState){
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, data)
    return res.data
}

export async function forgotPassword(email: string){
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/forgot-password`, {email})
    return res.data
}

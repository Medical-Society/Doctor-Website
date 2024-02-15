import axios from 'axios';
import { ISignupState } from '../interfaces/ISignup';
import { ILoginState } from '../interfaces/ILogin';
const API_URL = "https://medicalsociety.onrender.com/api/v1/doctors"

export async function loginUser(data: ILoginState){
    const res = await axios.post(`${API_URL}/login`, data)
    return res.data
}

export async function registerUser(data: ISignupState){
    const res = await axios.post(`${API_URL}/signup`, data)
    return res.data
}

export async function forgotPassword(email: string){
    const res = await axios.post(`${API_URL}/forgot-password`, {email})
    return res.data
}

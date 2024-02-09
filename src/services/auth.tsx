import axios from 'axios';
import { ISignupState } from '../interfaces/ISignup';
import { ILoginState } from '../interfaces/ILogin';
const API_URL = "http://localhost:3000/api/v1/doctors"

export async function loginUser(data: ILoginState){
    const res = await axios.post(`${API_URL}/login`, data)
    return res.data
}

export async function registerUser(data: ISignupState){
    const res = await axios.post(`${API_URL}/signup`, data)
    return res.data
}
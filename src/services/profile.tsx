import axiosInstance from './axios.config';

export async function createPost(data: any){
    const res = await axiosInstance.post('/posts', data)
    return res.data
}
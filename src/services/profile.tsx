import axiosInstance from './axios.config';
import Cookies from 'js-cookie';

export async function createPost(description: string, images: FileList) {
    const formData = new FormData();
    formData.append('description', description);

    for (let i = 0; i < images.length; i++) {
        formData.append('image', images[i]);
    }

    const res = await axiosInstance.post('/posts', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${Cookies.get('token')}`,
        },
    });

    return res.data;
}
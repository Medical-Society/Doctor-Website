import axiosInstance from './axios.config';

export async function uploadImages(images: FormData, token: string) {
    const res = await axiosInstance.post('doctors/verify', images, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        },
    });

    return res.data;
}
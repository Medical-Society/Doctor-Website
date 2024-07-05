import axiosInstance from './axios.config';
import Cookies from 'js-cookie';

const doctor = JSON.parse(Cookies.get('doctor') || '{}');
const token = Cookies.get('token');
const doctorId = doctor?._id;

export async function createPost(description: string, images: FileList) {
    const formData = new FormData();
    formData.append('description', description);

    for (let i = 0; i < images.length; i++) {
        formData.append('image', images[i]);
    }

    const res = await axiosInstance.post(`doctors/${doctorId}/posts`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        },
    });

    return res.data;
}

export async function deletePost(postId: string) {
    const res = await axiosInstance.delete(`doctors/${doctorId}/posts/${postId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res.data;
}

export async function updatePost(postId: string, description: string, images: FileList | null, removedImages: string[]) {
    const formData = new FormData();
    formData.append('description', description);

    if (images) {
        for (let i = 0; i < images.length; i++) {
            formData.append('image', images[i]);
        }
    }

    for (const image of removedImages) {
        formData.append('removedImages', image);
    }

    const res = await axiosInstance.patch(`doctors/${doctorId}/posts/${postId}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        },
    });

    return res.data;
}

export async function updateProfile(specialization: string, clinicAddress: string, phoneNumber: string) {
    const res = await axiosInstance.patch(`doctors`, { specialization, clinicAddress, phoneNumber }, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res.data;
}

export async function updateAvatar(formData: FormData) {

    const res = await axiosInstance.post(`doctors/avatar`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        },
    });

    return res.data;
}
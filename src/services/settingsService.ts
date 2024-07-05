import axiosInstance from './axios.config';
import Cookies from 'js-cookie';

const doctor = JSON.parse(Cookies.get('doctor') || '{}');
console.log(doctor);
const token = Cookies.get('token');
const doctorId = doctor?._id;

export const updatePassword = async (oldPassword: string, newPassword: string) => {
    const res = await axiosInstance.patch(`doctors/password`, {
        oldPassword,
        newPassword,
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res.data;
};

export const updateAvailableTime = async (availableTime: any) => {
    // console.log("token ", token);
    // console.log("doctorId ", doctorId);
    const res = await axiosInstance.patch(`doctors/${doctorId}/available-times`, {
        availableTime,
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return res.data;
}
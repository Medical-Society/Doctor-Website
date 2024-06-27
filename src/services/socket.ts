import { io } from "socket.io-client";
import Cookies from 'js-cookie';

const token = Cookies.get('token');
console.log('token:', token);
const apiUrl = "https://api.medical-society.fr.to/"
console.log('apiUrl:', apiUrl);
export const socket = io(apiUrl, {
    extraHeaders: {
        Authorization: `bearer ${token}`
    }
});

export const sendMessage = (message: string, chatId: string) => {
    socket.emit('send message', { chatId, message });
}
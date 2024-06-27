import { io } from "socket.io-client";
import Cookies from 'js-cookie';

const token = Cookies.get('token');
const apiUrl = "https://api.medical-society.fr.to/"
export const socket = io(apiUrl, {
    extraHeaders: {
        Authorization: `bearer ${token}`
    }
});

export const sendMessage = (message: string, chatId: string) => {
    socket.emit('send message', { chatId, message });
}
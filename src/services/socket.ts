import { io } from "socket.io-client";
import Cookies from 'js-cookie';

export const socket = io("https://chat-qxih.onrender.com");
const token = Cookies.get('token');

socket.on('connect', () => {
    console.log('connected');
    socket.emit('join rooms', token);
    console.log('joined rooms', token);
});

export const sendMessage = (message: string, chatId: string) => {
    socket.emit('send message', { token, chatId, message });
}
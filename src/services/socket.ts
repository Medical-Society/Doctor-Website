import { io, Socket } from "socket.io-client";
import Cookies from 'js-cookie';

const apiUrl = "https://api.medical-society.fr.to/";

let socket: Socket | null = null;

export const initializeSocket = () => {
    const token = Cookies.get('token');
    if (!token) {
        console.error('No token found');
        return null;
    }

    socket = io(apiUrl, {
        extraHeaders: {
            Authorization: `bearer ${token}`
        }
    });

    return socket;
};

export const sendMessage = (message: string, chatId: string) => {
    if (socket) {
        socket.emit('send message', { chatId, message });
    }
}

export const disconnectSocket = () => {
    if (socket) {
        socket.disconnect();
    }
}

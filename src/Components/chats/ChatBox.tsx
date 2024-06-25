import Cookies from 'js-cookie';
import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useCustomQuery from '../../hooks/useCustomQuery';
import { IMessage } from '../../interfaces';
import { sendMessage, socket } from '../../services/socket';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const ChatBox = () => {
    const { id } = useParams<{ id: string }>();
    const token = Cookies.get('token');
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    const { doctor } = useSelector((state: RootState) => state.auth)
    
    const { isLoading, data, error } = useCustomQuery({
        queryKey: [`chats-${id}`],
        url: `chats/${id ?? ''}`,
        config: {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    });

    const [messages, setMessages] = useState<IMessage[]>([]);
    const [inputMessage, setInputMessage] = useState<string>('');

    useEffect(() => {
        socket.on("listen message", ({message}: {message: string} ) => {
            console.log("listen message:", message);
            setMessages((prev) => [...prev, {userId: data?.data?.patient?._id, text: message, createdAt: new Date().toString()}]);
        });
    }, [data]);

    useEffect(() => {
        if (data?.data?.messages) {
            setMessages(data.data.messages);
        }
    }, [data]);

    useEffect(() => {
        const scrollToBottom = () => {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        };
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (inputMessage.trim() === '' || !id || !doctor) return;
        sendMessage(inputMessage, id);
        setInputMessage('');
        setMessages((prev) => [...prev, {userId: doctor?._id, text: inputMessage, createdAt: new Date().toString()}]);
    }

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading messages.</p>;
    console.log('id: ', id);
    return (
        <div className="flex flex-col w-full h-full overflow-y-hidden mt-20">
            <div className="flex flex-col w-full h-full overflow-y-auto bg-white">
                {!id && (
                    <div className="flex items-center justify-center h-full text-3xl text-violet-600">
                        Select a chat to start messaging
                    </div>
                )}
                {id && messages.length === 0 && (
                    <div className="flex items-center justify-center h-full text-3xl text-violet-600">
                        No messages
                    </div>
                )}
                {id && messages.map((message, index) => (
                    <div className="flex flex-col w-full" key={index}>
                        <div className={`text-violet-600 text-center font-semibold text-lg ${message.userId === doctor?._id ? 'text-right ml-auto' : 'text-left mr-auto'} px-2 my-1`}>
                            {doctor?.englishFullName}
                        </div>
                        <div className={`p-2 m-2 rounded-xl ${message.userId === doctor?._id ? 'bg-violet-600 text-white self-end max-w-2xl' : 'bg-white text-black self-start border'}`}>
                            {message.text}
                        </div>
                    </div>
                ))}
                {id && (
                    <div className='flex'>
                        <input type="text" className="w-full p-2 border-t-2 border-b-2 border-violet-600" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
                        <button className="p-2 bg-violet-600 text-white" onClick={handleSend}>Send</button>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
        </div>
    );
};

export default ChatBox;

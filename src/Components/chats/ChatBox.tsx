import Cookies from 'js-cookie';
import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useCustomQuery from '../../hooks/useCustomQuery';
import { IMessage } from '../../interfaces';

const ChatBox = () => {
    const { id } = useParams<{ id: string }>();
    const token = Cookies.get('token');
    const DoctorID = "Jane";
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    
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

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading messages.</p>;

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
                {messages.map((message, index) => (
                    <div className="flex flex-col w-full" key={index}>
                        <div className={`text-violet-600 text-center font-semibold text-lg ${message.userId === DoctorID ? 'text-right ml-auto' : 'text-left mr-auto'} px-2 my-1`}>
                            {message.userId}
                        </div>
                        <div className={`p-2 m-2 rounded-xl ${message.userId === DoctorID ? 'bg-violet-600 text-white self-end max-w-2xl' : 'bg-white text-black self-start border'}`}>
                            {message.text}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
        </div>
    );
};

export default ChatBox;

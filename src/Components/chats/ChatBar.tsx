import { NavLink } from "react-router-dom";
import useCustomQuery from "../../hooks/useCustomQuery"
import ChatCard from "./ChatCard"
import Cookies from 'js-cookie';
import { IChat } from "../../interfaces";

  
const ChatBar = () => {
    const token = Cookies.get('token');

    const {isLoading, data} = useCustomQuery({
        queryKey: ['all-chats'],
        url: 'chats',
        config: {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
    })
    
    return (
        <div className="flex flex-col gap-3 p-3 border-r border-gray-200 w-96">
            {isLoading ? <p>Loading...</p> : data.data.chats?.map((chat: IChat) => (
                <NavLink to={`/chats/${chat?._id}`} key={chat?._id} className="hover:bg-gray-200">
                    <ChatCard key={chat?._id} name={chat.patient.patientName} />
                </NavLink>
            ))}
        </div>
    )
}

export default ChatBar

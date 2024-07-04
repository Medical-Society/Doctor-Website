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
    <div className="w-full lg:w-80 lg:h-full lg:p-6 bg-white shadow-lg rounded-lg">
      <nav className="w-full flex flex-col justify-center lg:gap-5 gap-3 mb-5">
         {isLoading ? (
          <p>Loading...</p>
        ) : (
          data.data.chats?.map((chat: IChat) => (
            <NavLink to={`/chats/${chat?._id}`} key={chat?._id} 
            className={({ isActive }) =>
            ` ${
              isActive ? "border rounded-lg border-primary" : ""
            }`
          }
            >
              <ChatCard key={chat?._id} name={chat.patient.patientName} />
            </NavLink>
          ))
        )}
      </nav>
    </div>
    )
}

export default ChatBar

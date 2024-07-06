import { NavLink } from 'react-router-dom';
import useCustomQuery from '../../hooks/useCustomQuery';
import ChatCard from './ChatCard';
import Cookies from 'js-cookie';
import { IChat } from '../../interfaces';
import { CircularProgress } from '@mui/material';

interface IProps {
  open: boolean;
  setIsOpen: (open: boolean) => void;
}

const ChatBar = ({ open, setIsOpen }: IProps) => {
  const token = Cookies.get('token');

  const { isLoading, data } = useCustomQuery({
    queryKey: ['all-chats'],
    url: 'chats',
    config: {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  });

  const toggleSidebar = () => {
    setIsOpen(!open);
  };

  return (
      <div
        className={`w-full lg:w-80 h-full lg:p-6 bg-white shadow-lg rounded-lg absolute lg:static top-0 left-0 z-40 transform ${
          open ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:translate-x-0`}
      >
        <div className="flex justify-end p-5">
          <button
            className="lg:hidden"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="w-full flex flex-col justify-center lg:gap-5 gap-3 mb-5 px-2">
          {isLoading ? (
                <div className="flex items-center justify-center text-3xl text-center h-full">
                <CircularProgress />
                </div>
          ) : (
            data.data.chats?.map((chat: IChat) => (
              <NavLink
                to={`/chats/${chat?._id}`}
                key={chat?._id}
                className={({ isActive }) =>
                  `${isActive ? 'border rounded-lg border-primary' : ''}`
                }
              >
                <ChatCard key={chat?._id} name={chat.patient.patientName} />
              </NavLink>
            ))
          )}
        </nav>
      </div>
  );
};

export default ChatBar;

import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/clinic/SideBar";
import ChatBar from "../Components/chats/ChatBar";
import { FaCalendarAlt, FaUserMd } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { GiSkeleton } from "react-icons/gi";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

export const MainLayout = () => {
  return (
    <div className="h-full flex flex-col">
      <Navbar />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export const ClinicLayout = () => {
  return (
    <div className="px-3 py-10 flex flex-col lg:flex-row h-full">
      <SideBar>
        <NavLink
          to="doctor-room"
          className={({ isActive }) =>
            `flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-100 p-3 rounded-lg transition duration-200 ease-in-out ${
              isActive ? "border border-primary" : ""
            }`
          }
        >
          <FaUserMd />
          Doctor Room
        </NavLink>
        <NavLink
          to="today-appointments"
          className={({ isActive }) =>
            `flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-100 p-3 rounded-lg transition duration-200 ease-in-out ${
              isActive ? "border border-primary" : ""
            }`
          }
        >
          <FaCalendarAlt />
          today's Appointments
        </NavLink>
        <NavLink
          to="finished-appointments"
          className={({ isActive }) =>
            `flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-100 p-3 rounded-lg transition duration-200 ease-in-out ${
              isActive ? "border border-primary" : ""
            }`
          }
        >
          <FaCalendarAlt />
          Finished Appointments
        </NavLink>
        <NavLink
          to="models"
          className={({ isActive }) =>
            `flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-100 p-2 rounded-lg transition duration-200 ease-in-out ${
              isActive ? "border border-primary" : ""
            }`
          }
        >
          <GiSkeleton size={25} />
          Models
        </NavLink>
      </SideBar>
      <div className="w-full h-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export const ChatsLayout = () => {
  const [openChatsBar, setOpenChatsBar] = useState(true);
  return (
    <div className="flex flex-col md:flex-row h-full relative">
      <ChatBar open={openChatsBar} setIsOpen={setOpenChatsBar} />
      <div className="w-full absolute top-0 left-1 z-20 bg-white py-1 px-5">
        <button
          className="md:hidden w-40 bg-white text-black  rounded-[10px]"
          onClick={() => setOpenChatsBar(!openChatsBar)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
        <div className="flex flex-col flex-1 h-full">
          <Outlet />
        </div>
    </div>
  );
};

export const SettingsLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full">
      <SideBar>
        <NavLink
          to="update-password"
          className={({ isActive }) =>
            `flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-100 p-3 rounded-lg transition duration-200 ease-in-out ${
              isActive ? "border border-primary" : ""
            }`
          }
        >
          <RiLockPasswordLine />
          Update Password
        </NavLink>
        <NavLink
          to="available-time"
          className={({ isActive }) =>
            `flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-100 p-3 rounded-lg transition duration-200 ease-in-out ${
              isActive ? "border border-primary" : ""
            }`
          }
        >
          <FaCalendarAlt />
          Available Time
        </NavLink>
        <NavLink
          to="delete-account"
          className={({ isActive }) =>
            `flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-100 p-3 rounded-lg transition duration-200 ease-in-out ${
              isActive ? "border border-primary" : ""
            }`
          }
        >
          <MdDelete />
          Delete Account
        </NavLink>
      </SideBar>
      <div className="w-full h-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

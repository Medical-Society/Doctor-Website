import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/clinic/SideBar";
import ChatBar from "../Components/chats/ChatBar";
import { FaCalendarAlt, FaUserMd } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

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
              isActive ? "bg-blue-100 text-blue-600" : ""
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
              isActive ? "bg-blue-100 text-blue-600" : ""
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
              isActive ? "bg-blue-100 text-blue-600" : ""
            }`
          }
        >
          <FaCalendarAlt />
          Finished Appointments
        </NavLink>
      </SideBar>
      <div className="w-full h-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export const ChatsLayout = () => {
  return (
    <div className="flex flex-col md:flex-row h-full">
      <ChatBar />
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
                    isActive ? "bg-blue-100 text-blue-600" : ""
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
              isActive ? "bg-blue-100 text-blue-600" : ""
            }`
          }
        >
          <FaCalendarAlt />
          Available Time
        </NavLink>
      </SideBar>
      <div className="w-full h-full overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

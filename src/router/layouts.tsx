import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/clinic/SideBar";
import ChatBar from "../Components/chats/ChatBar";

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
            <SideBar />
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

import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/clinic/SideBar";
import ChatBar from "../Components/chats/ChatBar";

export const MainLayout = () => {
    return (
        <div className="h-full flex flex-col">
            <Navbar />
            <Outlet />
        </div>
    );
};

export const ClinicLayout = () => {
    return (
        <div className="p-16 flex flex-col md:flex-row h-full">
            <SideBar />
            <div className="w-full h-full">
                <Outlet />
            </div>
        </div>
    );
};

export const ChatsLayout = () => {
    return (
        <div className="flex flex-col md:flex-row h-full">
            <ChatBar />
            <div className="w-full h-full">
                <Outlet />
            </div>
        </div>
    );
}
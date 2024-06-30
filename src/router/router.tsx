import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "../Components/auth/ProtectedRoute";
import ForgetPass from "../pages/ForgetPass";
import Profile from "../pages/Profile";
import Appointments from "../pages/TodayAppointments";
import Models from "../pages/Models";
import ChatBox from "../Components/chats/ChatBox";
import { MainLayout, ClinicLayout, ChatsLayout, SettingsLayout } from "./layouts";
import Post from "../pages/Post";
import DoctorRoom from "../pages/DoctorRoom";
import TodayAppointments from "../pages/TodayAppointments";
import FinishedAppointments from "../pages/FinishedAppointments";
import MedicalHistory from "../pages/MedicalHistory";
import UpdatePassword from "../pages/UpdatePassword";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route 
                path="/" 
                element={<MainLayout />}
            >
                <Route index element={<Home />} />
                <Route path="login" element={
                    <ProtectedRoute redirectPath="/" isAuth={false}>
                        <Login />
                    </ProtectedRoute>
                } />
                <Route path="signup" element={
                    <ProtectedRoute redirectPath="/" isAuth={false}>
                        <Signup />
                    </ProtectedRoute>
                } />
                <Route path="forget-password" element={
                    <ProtectedRoute redirectPath="/" isAuth={false}>
                        <ForgetPass />
                    </ProtectedRoute>
                } />
                <Route path="profile" element={
                    <ProtectedRoute redirectPath="/" isAuth={true}>
                        <Profile />
                    </ProtectedRoute>
                } />
                <Route path = "post/:id" element={
                    <ProtectedRoute redirectPath="/" isAuth={true}>
                        <Post />
                    </ProtectedRoute>
                } />
                <Route path="clinic" element={
                    <ProtectedRoute redirectPath="/" isAuth={true}>
                        <ClinicLayout />
                    </ProtectedRoute>
                }>

                    <Route index element={<Appointments />} />
                    <Route path="today-appointments" element={<TodayAppointments />} />
                    <Route path="finished-appointments" element={<FinishedAppointments />} />
                    <Route path="doctor-room" element={<DoctorRoom />} />
                </Route>
                <Route path="chats" element={
                    <ProtectedRoute redirectPath="/" isAuth={true}>
                        <ChatsLayout />
                    </ProtectedRoute>
                }>
                    <Route index element={<ChatBox />} />
                    <Route path=":id" element={<ChatBox />} />
                </Route>
                <Route path="patient/:id/medical-history" element={<MedicalHistory />} />
                <Route path="models" element={<Models />} />
                <Route path="settings" element={
                    <ProtectedRoute redirectPath="/" isAuth={true}>
                        <SettingsLayout />
                    </ProtectedRoute>
                }>
                    <Route index element={<UpdatePassword />} />
                    <Route path="update-password" index element={<UpdatePassword />} />
                </Route>
            </Route>

            {/* Page Not Found */}
            <Route path="*" element={<h1 className="text-4xl font-bold text-center">404 Not Found</h1>} />
        </>
    )
);

export default router;

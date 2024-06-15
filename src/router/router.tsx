import { Route, createBrowserRouter, createRoutesFromElements, Outlet, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../Components/Navbar";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "../Components/auth/ProtectedRoute";
import ForgetPass from "../pages/ForgetPass";
import Profile from "../pages/Profile";
import Prescription from "../pages/DoctorRoom";
import Appointments from "../pages/Appointments";
import SideBar from "../Components/clinic/SideBar";

const MainLayout = () => {
    const location = useLocation();
    return (
        <div className="h-full flex flex-col">
            <Navbar path={location.pathname} />
            <Outlet />
        </div>
    );
};

const ClinicLayout = () => {
    return (
        <div className="p-16 flex flex-col md:flex-row h-full">
            <SideBar />
            <div className="w-full h-full">
                <Outlet />
            </div>
        </div>
    );
};

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
                <Route path="clinic" element={
                    <ProtectedRoute redirectPath="/" isAuth={true}>
                        <ClinicLayout />
                    </ProtectedRoute>
                }>
                    <Route index element={<Appointments />} />
                    <Route path="appointments" element={<Appointments />} />
                    <Route path="prescription" element={<Prescription />} />
                </Route>
            </Route>

            {/* Page Not Found */}
            <Route path="*" element={<h1 className="text-4xl font-bold text-center">404 Not Found</h1>} />
        </>
    )
);

export default router;

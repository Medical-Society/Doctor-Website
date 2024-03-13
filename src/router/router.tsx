import { Route, createBrowserRouter, createRoutesFromElements, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../Components/Navbar";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "../Components/auth/ProtectedRoute";
import ForgetPass from "../pages/ForgetPass";
import Profile from "../pages/Profile";
import Prescription from "../pages/Prescription";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route 
                path="/" 
                element={
                    <div className="h-full flex flex-col" >
                        <Navbar />
                        <Outlet />
                    </div>
                }
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
                }   />
                 <Route path="Profile" element={
                    <ProtectedRoute redirectPath="/" isAuth={true}>
                        <Profile />
                    </ProtectedRoute>
                }   />
                <Route path="Prescription" element={
                    <ProtectedRoute redirectPath="/" isAuth={true}>
                        <Prescription />
                    </ProtectedRoute>
                }   />
                
            </Route>

            {/* Page Not Found */}
            <Route path="*" element={<h1 className="text-4xl font-bold text-center">404 Not Found</h1>} />
        </>
    )
);

export default router;
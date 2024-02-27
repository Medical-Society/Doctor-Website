import { Route, createBrowserRouter, createRoutesFromElements, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../Components/Navbar";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "../Components/auth/ProtectedRoute";
import ForgetPass from "../pages/ForgetPass";
import DoctorsProfile from "../pages/Profile";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route 
                path="/" 
                element={
                    <div className="flex flex-col" >
                        <Navbar />
                        <Outlet />
                    </div>
                }
            >
                <Route index element={<Home />} />
                <Route path="login" element={
                    <ProtectedRoute redirectPath="/">
                        <Login />
                    </ProtectedRoute>
                } />
                <Route path="signup" element={
                    <ProtectedRoute redirectPath="/">
                        <Signup />
                    </ProtectedRoute>
                } />
                <Route path="forget-password" element={
                    <ProtectedRoute redirectPath="/">
                        <ForgetPass />
                    </ProtectedRoute>
                }   />
                 <Route path="Doctor-Profile" element={
                    <ProtectedRoute redirectPath="/">
                      <DoctorsProfile />
                    </ProtectedRoute>
                }   />
            </Route>

            {/* Page Not Found */}
            <Route path="*" element={<h1 className="text-4xl font-bold text-center">404 Not Found</h1>} />
        </>
    )
);

export default router;
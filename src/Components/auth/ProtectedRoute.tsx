import { ReactNode, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Cookies from 'js-cookie';
interface IProps {
    children: ReactNode;
    redirectPath: string;
    isAuth: boolean;
}

const ProtectedRoute = ({ children, redirectPath, isAuth}: IProps) => {
    const { setAuth } = useAuth()
    const token = Cookies.get('token');
    const doctor = Cookies.get('doctor');
    useEffect(() => {
        if (token && doctor) {
            setAuth({
                token,
                doctor: JSON.parse(doctor)
            });
        }
    }, [])


    if(isAuth){
        return token ? <>{children}</> : <Navigate to={redirectPath} />;
    }
    else{
        return !token ? <>{children}</> : <Navigate to={redirectPath} />;
    }

}

export default ProtectedRoute;
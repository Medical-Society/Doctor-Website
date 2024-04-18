import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie'

interface IProps {
    children: ReactNode;
    redirectPath: string;
    isAuth: boolean;
}

const ProtectedRoute = ({ children, redirectPath, isAuth}: IProps) => {
    const token = Cookies.get('token');
    if(isAuth){
        return token ? <>{children}</> : <Navigate to={redirectPath} />;
    }
    else{
        return !token ? <>{children}</> : <Navigate to={redirectPath} />;
    }

}

export default ProtectedRoute;
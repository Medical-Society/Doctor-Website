import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

interface IProps {
    children: ReactNode;
    redirectPath: string;
    isAuth: boolean;
}

const ProtectedRoute = ({ children, redirectPath, isAuth}: IProps) => {
    const { auth } = useAuth();
    if(isAuth){
        return auth.token ? <>{children}</> : <Navigate to={redirectPath} />;
    }
    else{
        return !auth.token ? <>{children}</> : <Navigate to={redirectPath} />;
    }

}

export default ProtectedRoute;
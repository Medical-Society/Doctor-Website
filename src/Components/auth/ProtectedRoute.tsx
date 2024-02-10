import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

interface IProps {
    children: ReactNode;
    redirectPath: string;
}

const ProtectedRoute = ({ children, redirectPath }: IProps) => {
    const { auth } = useAuth();
    console.log(auth);
    return auth.token ? <Navigate to={redirectPath} /> : <>{children}</>;
}

export default ProtectedRoute;
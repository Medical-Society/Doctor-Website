import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
interface IProps {
    children: ReactNode;
    redirectPath: string;
    isAuth: boolean;
}

const ProtectedRoute = ({ children, redirectPath, isAuth}: IProps) => {
    const {token} = useSelector((state: RootState) => state.auth)

    if(isAuth){
        return token ? <>{children}</> : <Navigate to={redirectPath} />;
    }
    else{
        return !token ? <>{children}</> : <Navigate to={redirectPath} />;
    }

}

export default ProtectedRoute;
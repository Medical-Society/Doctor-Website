import { ReactNode, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { useDispatch } from "react-redux";
import { loginReducer } from "../../app/features/authSlice";
interface IProps {
    children: ReactNode;
    redirectPath: string;
    isAuth: boolean;
}

const ProtectedRoute = ({ children, redirectPath, isAuth}: IProps) => {
    const dispatch = useDispatch()
    const token = Cookies.get('token');
    const doctor = Cookies.get('doctor');
    useEffect(() => {
        if (token && doctor) {
            dispatch(loginReducer({token, doctor: JSON.parse(doctor)}));
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
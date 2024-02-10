import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

interface IAuthContext {
    auth: any;
    setAuth: (auth: any) => void;
}

export const useAuth = (): IAuthContext => {
    return useContext(AuthContext);
}

export default useAuth;


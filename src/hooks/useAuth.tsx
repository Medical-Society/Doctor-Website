import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { IAuth } from "../interfaces";
interface IAuthContext {
    auth: IAuth;
    setAuth: (auth: IAuth) => void;
}

export const useAuth = (): IAuthContext => {
    return useContext(AuthContext);
}

export default useAuth;


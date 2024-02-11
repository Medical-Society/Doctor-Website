import { ReactNode, createContext, useState } from "react";
import { IAuth } from "../interfaces/IAuth";

interface IAuthContext {
    auth: IAuth;
    setAuth: (auth: IAuth) => void;
}

const defaultUser = {
    _id: "",
    englishFullName: "",
    arabicFullName: "",
    email: "",
    password: "",
    specialization: "",
    clinicAddress: "",
    nationalID: "",
    phoneNumber: "",
    age: 0,
    createdAt: "",
    updatedAt: "",
    gender: "",
    status: "",
    isVerified: false,
    __v: 0
};

const AuthContext = createContext<IAuthContext>({
    auth: {
        token: "",
        user: defaultUser
    },
    setAuth: () => { }
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [auth, setAuth] = useState<IAuth>({
        token: "",
        user: defaultUser
    });
    
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
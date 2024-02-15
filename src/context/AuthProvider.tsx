import { ReactNode, createContext, useState } from "react";
import { IAuth } from "../interfaces";

interface IAuthContext {
    auth: IAuth;
    setAuth: (auth: IAuth) => void;
}

const defaultDoctor = {
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
        doctor: defaultDoctor
    },
    setAuth: () => { }
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [auth, setAuth] = useState<IAuth>({
        token: "",
        doctor: defaultDoctor
    });
    
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
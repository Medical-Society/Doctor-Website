import { ReactNode, createContext, useState } from "react";

interface IAuthContext {
    auth: any;
    setAuth: (auth: any) => void;
}

const AuthContext = createContext<IAuthContext>({
    auth: {},
    setAuth: () => {}
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [auth, setAuth] = useState({});
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
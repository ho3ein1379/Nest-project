import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {UserType} from "@/types";

interface Props {
    children: ReactNode;
}

interface ContextProviderProps {
    isLogin: boolean;
    Login: (jwt: string, user: UserType) => void;
    Logout: () => void;
}

const AuthContext = createContext<ContextProviderProps>({isLogin: false, Login: () => {}, Logout: () => {}});
export const useUser = () => useContext(AuthContext);

export function AuthContextProvider({children}: Props) {

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (window.localStorage.getItem("token")) {
            setIsLogin(true);
        }
    }, []);

    const LoginHandler = (jwt: string, user: UserType) => {
        window.localStorage.setItem("token", jwt);
        window.localStorage.setItem("user", JSON.stringify(user));
        setIsLogin(true);
    }

    const LogoutHandler = () => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
        setIsLogin(false);
    }
    
    return (
        <AuthContext.Provider value={{isLogin: isLogin, Login: LoginHandler, Logout: LogoutHandler}}>
            {children}
        </AuthContext.Provider>)
}
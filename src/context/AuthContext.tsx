import React, { createContext, useCallback, useState } from "react";
import api from "../services/api"

interface AuthState {
    jwt: string;
}

interface SignInCredentials {
    email: string;
    senha: string;
};

interface AuthContextData {
    signIn(credentials: SignInCredentials): Promise<void>;
};

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        const jwt = localStorage.getItem("@Logistica:token");

        if (jwt) {
            return { jwt };
        }

        return {} as AuthState;
    });

    const signIn = useCallback(async ({ email, senha}) => {
        const respose = await api.post("authenticate", {
            email,
            senha,
        });

        console.log(respose.data)
        const { jwt } = respose.data;

        localStorage.setItem("@Logistica:token", jwt);
        setData(jwt);
    }, []);

    return(
      <AuthContext.Provider value={{signIn}}>
          {children}
      </AuthContext.Provider>
    );
};

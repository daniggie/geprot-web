import React, { createContext, useCallback, useContext, useState } from "react";
import api from "../services/api";

interface AuthState {
  jwt: string;
  gestor: object;
}

interface SignInCredentials {
  email: string;
  senha: string;
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  gestor: object;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<AuthState>(() => {
    const jwt = localStorage.getItem("@Geprot:token");
    const gestor = localStorage.getItem("@Geprot:gestor")

    if (jwt && gestor) {
      return { jwt , gestor :JSON.parse(gestor)};
    }

    return {} as AuthState;
  });

  const signIn = useCallback( async ({email, senha}) => {
    const response = await api.post("login", {
      email,
      senha
    });

    const { jwt, gestor } = response.data;

    localStorage.setItem("@Geprot:token", jwt);
    localStorage.setItem("@Geprot:gestor", JSON.stringify(gestor));
    setData({ jwt, gestor });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@Geprot:token");
    localStorage.removeItem("@Geprot:gestor");

    setData({} as AuthState);

  }, [])

  return (
    <AuthContext.Provider value={{gestor: data.gestor, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if(!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

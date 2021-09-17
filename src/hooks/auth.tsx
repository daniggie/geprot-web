import React, { createContext, useCallback, useContext, useState } from "react";
import api from "../services/api";

interface AuthState {
  jwt: string;
  usuario: object;
}

interface SignInCredentials {
  email: string;
  senha: string;
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>;
  usuario: object;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<AuthState>(() => {
    const jwt = localStorage.getItem("@Geprot:token");
    const usuario = localStorage.getItem("@Geprot:usuario")

    if (jwt && usuario) {
      return { jwt , usuario :JSON.parse(usuario)};
    }

    return {} as AuthState;
  });

  const signIn = useCallback( async ({email, senha}) => {
    const response = await api.post("authenticate", {
      email,
      senha
    });

    const { jwt, usuario } = response.data;

    localStorage.setItem("@Geprot:token", jwt);
    localStorage.setItem("@Geprot:usuario", JSON.stringify(usuario));
    setData({ jwt, usuario });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@Geprot:token");
    localStorage.removeItem("@Geprot:usuario");

    setData({} as AuthState);

  }, [])

  return (
    <AuthContext.Provider value={{usuario: data.usuario, signIn, signOut}}>
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

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { AuthContext } from ".";
import { User } from "../../types";
import { useApi } from "../../Hooks/useApi";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      //captura o valor do localstorage
      const storageData = localStorage.getItem("authToken");

      //verifica se tem dado no localStorage
      if (storageData) {
        //caso exista dado é guardada a informação
        const data = await api.validateToken(storageData);
        if (data.user) {
          setUser(data.user);
        }
      }
    };
    validateToken();
  }, []);

  //função para realizar o login do usário
  const signin = async (cpf: string, password: string, userType: string) => {
    console.log("signin esta sendo executado");
  
    const data = await api.signin(cpf, password, userType);
    if (data.user && data.token) {
      //Salva o usuário
      setUser(data.user);
      //Salva o token no localStorage
      setToken(data.token);
      return true;
    }
    return false;
  };

  //função para deslogar da conta
  const signout = async () => {
    console.log("signout esta sendo executado");
    await api.logout();
    setUser(null);
    setToken("");
  };

  //Salvando o token
  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}

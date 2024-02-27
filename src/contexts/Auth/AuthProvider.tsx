/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { AuthContext } from ".";
import { User } from "src/types";
import { useApi } from "src/Hooks/useApi";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  // useEffect(() => {
  //   const validateToken = async () => {
  //     //captura o valor do localstorage
  //     const storageData = localStorage.getItem("authToken");
  //     const storageUser = localStorage.getItem("authToken");

  //     //verifica se tem dado no localStorage
  //     if (storageData) {
  //       //caso exista dado é guardada a informação
  //       const data = await api.validateToken(storageData);
  //       if (data.user) {
  //         setUser(data.user);
  //       }
  //     }
  //   };
  //   validateToken();
  // }, []);

  //função para realizar o login do usário
  const signin = async (cpf: string, password: string, userType: string) => {
    console.log("signin esta sendo executado");

    const data = await api.signin(cpf, password, userType);
    // if (data.user && data.token) {
    if (data.token) {
      const { user, acess } = data;
      console.log(user, "user");

      //   console.log(acess);

      //Salva o usuário
      setUser(user);
      setUserStorage(user);

      localStorage.getItem("authToken");

      //Salva o token no localStorage
      setToken(acess);
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

  //Salvando o token e usuario
  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  const setUserStorage = (user: string) => {
    localStorage.setItem("authUser", user);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}

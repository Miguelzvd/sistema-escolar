import { useEffect, useState } from "react";
import { AuthContext } from ".";
import { User } from "../../types";
import { useApi } from "../../Hooks/useApi";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      console.log("rodando");
      //Captura o dado do localStorage
      const storageData = localStorage.getItem("authToken");
      //Verfica se tem algum dado
      if (storageData) {
        //verifica se é um token válido
        const data = await api.validateToken(storageData);
        if (data.user) {
          setUser(data.user);
          return true;
        }
        return false;
      }
      return;
    };
    validateToken();
  }, [api]);

  //função para realizar o login do usário
  const signin = async (matricula: string, password: string) => {
    const data = await api.signin(matricula, password);
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

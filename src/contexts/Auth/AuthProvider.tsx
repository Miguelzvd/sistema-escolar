import { useState } from "react";
import { AuthContext } from ".";
import { User } from "../../types";
import { useApi } from "../../Hooks/useApi";

export function AuthProvider ({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();
  
  const signin = async (matricula: string, password: string) => {
    const data = await api.signin(matricula, password);
    if(data.user && data.token){
        setUser(data.user);
        return true;
    }
    return false;
  };

  const signout = async () => {
    await api.logou();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}

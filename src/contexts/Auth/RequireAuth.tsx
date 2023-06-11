import { useContext } from "react";
import { AuthContext } from "./";
import { Login } from "src/pages";

export function RequireAuth({ children }: { children: React.ReactNode }) {

    const auth = useContext(AuthContext);

    if(!auth.user){
      return <Login/>
    }

    return <>{children}</>;
  }
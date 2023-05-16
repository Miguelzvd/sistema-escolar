import { Nav } from "../../components";
import { AuthContext } from "../../contexts";
import { useContext } from "react"

export function Private() {
  const auth = useContext(AuthContext);

  return (
    <>
      <Nav></Nav>
      <h1 className="font-bold text-center">Rota privada acessada</h1>
      <h2 className="font-bold text-center">Olá {auth.user?.name}, tudo bem?</h2>
      
    </>
  );
}

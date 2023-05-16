import { useNavigate } from "react-router-dom";
import { Nav } from "../../components";
import { AuthContext } from "../../contexts";
import { useContext } from "react";

export function Home() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signout();
    navigate("/")
  };

  return (
    <>
      <header>
        <Nav />
      </header>
      <h1 className="font-bold">Home</h1>

      {
        //verifica se o usuário está logado, se estiver logado, ele renderiza o que está depois do "&&"
        auth.user && (
          <a href="#" onClick={handleLogout}>
            Sair
          </a>
        )
      }
    </>
  );
}

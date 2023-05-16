import { Nav } from "../../components";
import { AuthContext } from "../../contexts";
import { useContext } from "react";

export function Home() {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location.href = window.location.href
  };

  return (
    <>
      <header>
        <Nav />
      </header>
      <div className="flex flex-col text-center">
      <h1 className="font-bold">Home</h1>
        {
          //verifica se o usuário está logado, se estiver logado, ele renderiza o que está depois do "&&"
          auth.user && (
            <button onClick={handleLogout}>
              Sair
            </button>
          )
        }
      </div>
    </>
  );
}

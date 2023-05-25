import { HiOutlineUserCircle } from "react-icons/Hi";
import { EscolaMHR, Sair } from "../../../iconComponents";
import MenuItem from "./MenuItem";
import { useContext } from "react";
import { AuthContext } from "../../../contexts";

type Props = {
  children: React.ReactNode;
  open: boolean;
};

export default function Menu({ children, open }: Props) {
  const auth = useContext(AuthContext);
  const handleLogout = async () => {
    await auth.signout();
  };

  return (
    <main>
      {/* MENU */}

      {/* Icone Escola */}
      <section
        className={`${
          !open ? "hidden" : "w-full h-fit flex justify-center mt-4"
        }`}
      >
        <EscolaMHR className="w-40 h-40 text-white" />
      </section>

      {/* USUARIO */}
      <section className="flex flex-col  h-140 w-full justify-center gap-16">
        <div
          className={`ml-1 inline-flex gap-4 text-white items-center 
          ${!open ? "justify-center" : "justify-start"} `}
        >
          <div className={`${!open ? "hidden md:block" : "block"} `}>
            <HiOutlineUserCircle size="2rem" color="white" />
          </div>
          <span className={`${!open ? "hidden" : "flex flex-row"}`}>
            Usuário: {}
          </span>
        </div>

        {/* Opcoes do menu */}
        <ul className="w-full flex flex-col gap-8 whitespace-nowrap">
          {children}
          <MenuItem
            Icon={Sair}
            title="Sair"
            open={open}
            mlClosed="ml-2"
            mlOpened="ml-3"
            handleClick={handleLogout}
            link="/"
          />
        </ul>
      </section>
    </main>
  );
}

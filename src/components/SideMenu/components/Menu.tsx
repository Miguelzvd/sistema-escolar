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
    // MENU
    <main className={`flex flex-col justify-start h-full gap-20 sm:gap-25 lg:gap-32 ${!open && "justify-center"}`}>  

      {/* Icone Escola */}
      <section
        className={`${
          !open ? "hidden" : "w-full h-fit flex justify-center mt-4"
        }`}
      >
        <EscolaMHR className="w-20 h-20 sm:w-40 sm:h-40 text-white" />
      </section>

      <section className="flex flex-col h-fit w-full justify-center gap-16">
      
        {/* USUARIO */}
        <div
          className={`ml-0  inline-flex gap-4 text-white items-center 
          ${!open ? "justify-center" : "ml-4"} `}
        >
          <div className={`${!open ? "hidden lg:block" : "block"} `}>
            <HiOutlineUserCircle size="2rem" color="white" />
          </div>
          <span className={`${!open ? "hidden" : "flex flex-row"}`}>
            Usuário: {}
          </span>
        </div>

        {/* Opcoes do menu */}
        <ul className="w-full flex flex-col gap-8">
          {children}
          <MenuItem
            Icon={Sair}
            title="Sair"
            open={open}
            mlClosed="ml-2"
            mlOpened="ml-5"
            handleClick={handleLogout}
            link="/"
          />
        </ul>
      </section>
    </main>
  );
}

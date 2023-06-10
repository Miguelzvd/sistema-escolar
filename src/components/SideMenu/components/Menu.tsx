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
  const user = useContext(AuthContext);
  const handleLogout = async () => {
    await user.signout();
  };

  return (
    // MENU
    <main
      className={`flex flex-col justify-start h-full gap-10 md:gap-20 ${
        !open && "justify-center"
      }`}
    >
      {/* Icone Escola */}
      <section
        className={`${
          !open ? "hidden" : "w-full h-fit flex justify-center mt-4"
        }`}
      >
        <EscolaMHR className="w-[8rem] sm:w-[10rem] h-[8rem] sm:h-[10rem] text-white" />
      </section>

      <section className="flex flex-col h-fit w-full justify-center gap-16">
        {/* USUARIO */}
        <div
          className={`ml-0 inline-flex gap-4 text-white items-center 
          ${!open ? "justify-center" : "pl-4"} `}
        >
          <div className="">
            <HiOutlineUserCircle size="2rem" color="white" />
          </div>
          <div className={!open ? "hidden" : "flex flex-col"}>
            <span className={!open ? "hidden" : "w-60"}>Usuário:</span>
            <span className={!open ? "hidden" : "w-60"}>{user.user?.name}</span>
          </div>
        </div>

        {/* Opcoes do menu */}
        <ul className="w-full flex flex-col  gap-8">
          {children}
          <MenuItem
            Icon={Sair}
            title="Sair"
            open={open}
            mlClosed="ml-2"
            mlOpened="ml-5"
            handleClick={handleLogout}
            link="/signin"
            textColor="hover:text-red-500"
          />
        </ul>
      </section>
    </main>
  );
}

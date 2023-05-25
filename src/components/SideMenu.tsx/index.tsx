import { HiOutlineUserCircle } from "react-icons/Hi";
import { SVGProps, useState } from "react";
import MenuItem from "./MenuItem";
import { Seta, EscolaMHR, Sair } from "../../iconComponents";
import { AuthContext } from "../../contexts";
import { useContext } from "react";

type Props = {
  menuItems: Array<{
    title: string;
    Icon: React.FC<SVGProps<SVGSVGElement>>;
    link: string;
  }>;
};

export function SideMenu({ menuItems }: Props) {
  const [open, setOpen] = useState(true);
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
  };

  return (
    <main className="flex flex-row min-h-screen w-fit ">

      <div
        className={`bg-secundary h-full flex flex-col justify-center duration-300 ${
          open ? "w-60 sm:w-72" : "w-0 md:w-12"
        }`}
      >

        {/* Icone Escola */}
        <section
          className={`${
            !open ? "hidden" : "w-full h-fit flex justify-center mt-4"
          }`}
        >
          <EscolaMHR className="w-40 h-40 text-white" />
        </section>

        {/* MENU */}
        <section className="flex flex-col  h-140 w-full justify-center gap-16">
          <div
            className={`ml-1 inline-flex gap-4 text-white items-center 
          ${!open ? "justify-center" : "justify-start"} `}
          >
            <div className={`${!open ? "hidden md:block" : "block"} `}>
              <HiOutlineUserCircle size="2rem" color="white" />
            </div>
            <span
              className={`${!open ? "hidden" : "flex flex-row"}`}
            >
              Usuário: {}
            </span>
          </div>

          {/* Opcoes do menu */}
          <ul className="w-full flex flex-col gap-8 whitespace-nowrap">
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                Icon={item.Icon}
                title={item.title}
                link={item.link}
                open={open}
                mlClosed="ml-0"
                mlOpened="ml-2"
              />
            ))}
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
      </div>

      <div
        className="w-6 flex items-center bg-gradient-to-r from-gray-400/50 to-gray-100/10 hover:cursor-pointer hover:from-gray-400/70"
        onClick={() => setOpen(!open)}
      >
        <Seta className={`${!open ? "rotate-180 bg" : "rotate-0"}`} />
      </div>
    </main>
  );
}

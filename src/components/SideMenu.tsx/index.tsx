import { HiOutlineUserCircle } from "react-icons/Hi";
import { SVGProps, useState } from "react";
import MenuItem from "./MenuItem";
import {
  Seta,
  EscolaMHR,
  Sair,
} from "../../iconComponents";


type Props = {
    menuItems: Array<{
    title: string;
    Icon:  React.FC<SVGProps<SVGSVGElement>>;
    link: string;
  }>;
}

export function SideMenu({ menuItems }: Props) {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex flex-row min-h-screen w-fit">
      <div
        className={`bg-secundary h-full flex flex-col ${
          open ? "w-72" : "w-12 flex flex-col justify-center"
        } duration-200`}
      >
        {/* Icone Escola */}
        <div
          className={`${
            !open ? "hidden" : "w-full h-fit flex justify-center mt-4"
          }`}
        >
          <EscolaMHR className="w-40 h-40 text-white" />
        </div>

        {/* MENU */}
        <div className="flex flex-col h-full w-full justify-center gap-16">
          <div
            className={`ml-1 flex flex-row gap-4 text-white items-center 
          ${!open ? "justify-center" : "justify-start"} `}
          >
            <HiOutlineUserCircle size="2rem" color="white" />
            <span className={`${!open ? "hidden" : "inline"}`}>
              Usuário: {}
            </span>
          </div>

          {/* Opcoes do menu */}
          <ul className="w-full flex flex-col gap-8 whitespace-nowrap overflow-hidden">
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
            <MenuItem Icon={Sair} title="Sair" open={open} mlClosed="ml-2" mlOpened="ml-3" link="/sair" />
          </ul>
        </div>
      </div>

      <div
        className="w-6 flex items-center bg-gradient-to-r from-gray-400/50 to-gray-100/10 hover:cursor-pointer hover:from-gray-400/70"
        onClick={() => setOpen(!open)}
      >
        <Seta className={`${!open ? "rotate-180 bg" : "rotate-0"}`} />
      </div>
    </div>
  );
}

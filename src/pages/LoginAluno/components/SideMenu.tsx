import { SVGProps, useState } from "react";
import { HiOutlineUserCircle } from "react-icons/Hi";

import {
  Seta,
  Boletim,
  DiarioDeClasse,
  EscolaMHR,
  DadosPessoais,
  Relatorio,
  Sair,
} from "../../../iconComponents";

type Props = {
  title: string;
  Icon: React.FC<SVGProps<SVGSVGElement>>;
};

export function SideMenu() {
  const [open, setOpen] = useState(true);

  function MenuItem({ title, Icon }: Props) {
    return (
      <li
        className={`hover:bg-white/25 hover:cursor-pointer duration-150 h-10 flex items-center gap-4 font-bold text-white ${
          !open ? "justify-center" : ""
        }`}
      >
        <Icon
          className={`${!open ? "ml-0" : "ml-2"}`}
          width="1.5rem"
          height="1.5rem"
        />
        <span className={`${!open ? "hidden" : "inline"}`}> {title} </span>
      </li>
    );
  }

  return (
    <>
      <div
        className={`bg-secundary min-h-screen flex flex-col gap-20 ${
          open ? "w-72" : "w-12 flex flex-col justify-center"
        } duration-200`}
      >
        {/* Icone Escola */}
        <div
          className={`${
            open ? "w-full h-fit flex justify-center mt-4" : "hidden"
          }`}
        >
          <EscolaMHR className="w-40 h-40 text-white" />
        </div>

        <div className="ml-1 flex flex-row gap-4 text-white items-center">
          <HiOutlineUserCircle size="2rem" color="white" />
          <span className={`${!open ? "hidden" : "inline"}`}>Usuário: {}</span>
        </div>
        {/* Opcoes do menu */}
        <ul className=" w-full flex flex-col gap-8 ">
          <MenuItem Icon={Boletim} title="Boletim" />
          <MenuItem Icon={DiarioDeClasse} title="Diário de Classe" />
          <MenuItem Icon={DadosPessoais} title="Dados Pessoais" />
          <MenuItem Icon={Relatorio} title="Relatório da Disciplina" />
          <li
            className={`hover:bg-white/25 hover:cursor-pointer duration-150 h-10 flex items-center gap-4 font-bold text-white ${
              !open ? "justify-center" : ""
            }`}
          >
            <Sair
              className={`${!open ? "ml-2" : "ml-3"}`}
              width="1.5rem"
              height="1.5rem"
            />
            <span className={`${!open ? "hidden" : "inline"}`}> Sair </span>
          </li>
        </ul>
      </div>

      <div
        className="w-6 flex items-center bg-gradient-to-r from-gray-400/50 to-gray-100/10 hover:cursor-pointer hover:from-gray-400/70"
        onClick={() => setOpen(!open)}
      >
        <Seta className={`${!open ? "rotate-180" : "rotate-0"}`} />
      </div>
    </>
  );
}

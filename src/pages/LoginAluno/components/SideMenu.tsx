import { HiOutlineUserCircle } from "react-icons/Hi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";
import {
  Seta,
  Boletim,
  DiarioDeClasse,
  EscolaMHR,
  DadosPessoais,
  Relatorio,
  Sair,
} from "../../../iconComponents";

export function SideMenu() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const MenuItems = [
    { 
      Icon: Boletim,
      title: "Boletim",
      link:"/boletim" 
    },
    { 
      Icon: DiarioDeClasse,
      title: "Diário de Classe",
      link:"/boletim"
     },
    { 
      Icon: DadosPessoais,
      title: "Dados Pessoais",
      link: "/boletim" 
    },
    { 
      Icon: Relatorio,
      title: "Relatório da Disciplina",
      link:"/boletim"
    },
    { 
      Icon: Sair,
      title: "Sair",
      spacing:true,
      link: "/boletim"
    },
  ];

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
        <div className="flex flex-col h-full w-full justify-center gap-16">
          
          <div className={`ml-1 flex flex-row gap-4 text-white items-center 
          ${ !open ? "justify-center" : "justify-start" } `}
          >

            <HiOutlineUserCircle size="2rem" color="white" />
            <span className={`${!open ? "hidden" : "inline"}`}>
              Usuário: {}
            </span>
          </div>

          {/* Opcoes do menu */}
          <ul className=" w-full flex flex-col gap-8">
            {MenuItems.map((item, index) => (
              
              <MenuItem
                key={index}
                Icon={item.Icon}
                title={item.title}
                onClick={()=>{navigate(item.link)}}
                open={open}
                mlClosed={item.spacing? "ml-2": "ml-0"}
                mlOpened={item.spacing? "ml-3": "ml-2"}
                />

            ))}
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

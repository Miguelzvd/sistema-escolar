import { Outlet } from "react-router-dom";
import { SideMenu } from "../../components";
import {
  Boletim,
  DiarioDeClasse,
  DadosPessoais,
  Relatorio,
} from "../../iconComponents";

export function LoginAluno() {

  const MenuData = [
    {
      Icon: Boletim,
      title: "Digitação de Notas",
      link: "notas",
    },
    {
      Icon: DiarioDeClasse,
      title: "Diário de Classe",
      link: "diario-classe",
    },
    {
      Icon: DadosPessoais,
      title: "Dados Pessoais",
      link: "dados-pessoais",
    },
    {
      Icon: Relatorio,
      title: "Relatório da Disciplina",
      link: "relatorio-disciplina",
    },
];

  return (
    <>
      {/* SIDE MENU */}
      <div className="flex flex-row overflow-auto min-h-screen w-full ">
        <SideMenu menuItems={MenuData}/>    
        <Outlet/>
      </div>

    </>
  );
}

import { BrowserRouter } from "react-router-dom";
import { SideMenu } from "../../components";
import {
  Boletim,
  DiarioDeClasse,
  DadosPessoais,
  Relatorio,
} from "../../iconComponents";
import LoginPages from "./components/LoginPages";

type Props = { children: React.ReactNode }
export function LoginAluno({children}: Props) {

  const MenuItems = [
    {
      Icon: Boletim,
      title: "Digitação de Notas",
      link: "/notas",
    },
    {
      Icon: DiarioDeClasse,
      title: "Diário de Classe",
      link: "/diario-classe",
    },
    {
      Icon: DadosPessoais,
      title: "Dados Pessoais",
      link: "/dados",
    },
    {
      Icon: Relatorio,
      title: "Relatório da Disciplina",
      link: "/boletim",
    },
];

  return (
    <>
      {/* SIDE MENU */}
      <BrowserRouter>
      <div className="flex flex-row overflow-auto min-h-screen w-full ">
        <SideMenu menuItems={MenuItems}/>    
        <LoginPages></LoginPages>
      </div>
      </BrowserRouter>

    </>
  );
}

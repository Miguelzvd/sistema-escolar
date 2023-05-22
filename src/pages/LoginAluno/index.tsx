import { SideMenu } from "../../components";
import {
  Boletim,
  DiarioDeClasse,
  DadosPessoais,
  Relatorio,
} from "../../iconComponents";

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
      <div className="flex flex-row overflow-auto min-h-screen w-full ">
        <SideMenu menuItems={MenuItems}/>    
        {children}
      </div>
    </>
  );
}

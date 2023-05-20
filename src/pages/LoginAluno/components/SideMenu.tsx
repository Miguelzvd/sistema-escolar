/* eslint-disable quotes */
import { useState } from "react";
import {
  Boletim,
  DiarioDeClasse,
  EscolaMHR,
  DadosPessoais,
  Relatorio,
  Sair,
} from "../../../iconComponents";

export function SideMenu() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div
        className={`bg-secundary min-h-screen flex flex-col gap-40 ${
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

        {/* Opcoes do menu */}
        <ul className=" w-full flex flex-col gap-8 ">
          <li
            className={`duration-150 h-10 flex items-center gap-4 font-bold text-white hover:bg-white/25 hover:cursor-pointer ${
              !open ? "justify-center" : ""
            }`}
          >
            <Boletim width="1.5rem" height="1.5rem" />
            <span className={`${!open ? "hidden" : ""}`}> Boletim </span>
          </li>

          <li
            className={`hover:bg-white/25 hover:cursor-pointer duration-150 h-10 flex items-center gap-4 font-bold text-white ${
              !open ? "justify-center" : ""
            }`}
          >
            <DiarioDeClasse width="1.5rem" height="1.5rem" />
            <span className={`${!open ? "hidden" : ""}`}>
              Diário de Classe
            </span>
          </li>

          <li
            className={`hover:bg-white/25 hover:cursor-pointer duration-150 h-10 flex items-center gap-4 font-bold text-white ${
              !open ? "justify-center" : ""
            }`}
          >
            <DadosPessoais width="1.5rem" height="1.5rem" />
            <span className={`${!open ? "hidden" : ""}`}> Dados Pessoais </span>
          </li>

          <li
            className={`hover:bg-white/25 hover:cursor-pointer duration-150 h-10 flex items-center gap-4 font-bold text-white ${
              !open ? "justify-center" : ""
            }`}
          >
            <Relatorio width="1.5rem" height="1.5rem" />
            <span className={`${!open ? "hidden" : ""}`}>
              {" "}
              Relatório da Disciplina{" "}
            </span>
          </li>

          <li
            className={`mt-8 hover:bg-white/25 hover:cursor-pointer duration-150 h-10 flex items-center gap-4 font-bold text-white ${
              !open ? "justify-center" : ""
            }`}
          >
            <Sair width="1.5rem" height="1.5rem" />
            <span className={`${!open ? "hidden" : ""}`}> Sair </span>
          </li>
          
        </ul>

      </div>

      <div
        className="w-6 flex items-center bg-gradient-to-r from-gray-400/50 to-gray-100/10 hover:cursor-pointer hover:from-gray-400/70"
        onClick={() => setOpen(!open)}
      ></div>
    </>
  );
}

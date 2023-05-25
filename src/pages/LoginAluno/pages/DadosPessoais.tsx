/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card } from "../components";
import Button from "../../../components/Button/index";
import { useState } from "react";



export function DadosPessoais() {
  
  // setData a ser inserido na const
  const [data] = useState([
    { label: "Nome", value: "fasdf" },
    { label: "Telefone", value: "(XX)-XXXXX-XXXX" },
    { label: "E-mail", value: "fulano@gmail.com" },
    { label: "Matricula", value: "XXXXXXXXXXXXXXXXX" },
    { label: "Turma", value: "Turma X" },
    { label: "Ano", value: "9° ano" },
    { label: "Turno", value: "Matutino" },
    { label: "Responsável", value: "Cicrano" },
    { label: "Pai", value: "Joaozinho Da Silva Junior" },
    { label: "Mãe", value: "Maria Da Silva" },
    { label: "CEP", value: "XX.XXX-XXX" },
    { label: "Número", value: "XXX" },
    { label: "Endereço", value: "Rua XXXXXXXXXXXX" },
    { label: "Complemento", value: "XXXXXXXXXXXX" },
  ]);

  return (
    <Card title="DADOS PESSOAIS">
      <main className="w-[95%] h-full text-black flex flex-col gap-8 justify-around items-center">
        <section className="w-full grid grid-flow-row grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((data, index) => 
            (
              <div key={index} className="border-b border-black">
                <p>{data.label}</p>
                <p>{data.value}</p>
              </div>
            )
          )}
        </section>
        <div className="flex flex-row w-full justify-center">
          <div className="w-60">
            <Button text="Editar" />
          </div>
        </div>
      </main>
    </Card>
  );
}

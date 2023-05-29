/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { Card } from "../../../components/Card";
import { useEffect, useState } from "react";

export function DadosPessoais() {
  // setData a ser inserido na const
  // const [data] = useState([
  //   { label: "Nome", value: "fasdf" },
  //   { label: "Telefone", value: "(XX)-XXXXX-XXXX" },
  //   { label: "E-mail", value: "fulano@gmail.com" },
  //   { label: "Matricula", value: "XXXXXXXXXXXXXXXXX" },
  //   { label: "Turma", value: "Turma X" },
  //   { label: "Série", value: "9° ano" },
  //   { label: "Responsável", value: "Cicrano" },
  //   { label: "Pai", value: "Joaozinho Da Silva Junior" },
  //   { label: "Mãe", value: "Maria Da Silva" },
  //   { label: "CEP", value: "XX.XXX-XXX" },
  //   { label: "Número", value: "XXX" },
  //   { label: "Endereço", value: "Rua XXXXXXXXXXXX" },
  //   { label: "Complemento", value: "XXXXXXXXXXXX" },
  // ]);

  // interface Data { 
  //   NomeAluno:string;
  //   NomePeriodo: string;
  //   NomeSerie: string;
  //   NomeCurso: string;
  //   NomeTurma: string;
  //   SiglaTurma: string;
  //   Matricula: string;
  //   StAlunoTurma: string;
  // }
  // Comentado para aprovação com Miguel para alteração
   interface Data {
     label: string;
     value: string;
  }
  const [data, setData] = useState([]);
  
   const  getData = async () => {
  
      try {
        const response = await axios.get("http://localhost:3000/api/alunos/");
        console.log(response.data);
        setData(response.data.result);
      }
      catch (error) {
        console.log(error);
      }
    };
   
    useEffect(() => {
      getData();
    }, []);

  return (
    <Card title="DADOS PESSOAIS">
      <main className="w-[95%] h-full text-black flex flex-col gap-8 justify-around items-center">
        <section className="w-full grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* {data.length === 0 ? <p>Carregando..</p> : (
            data.map((data:Data, index) => (
              <div key={index}>
                <h2>{data.NomePeriodo}</h2>
                <h2>{data.NomeSerie}</h2>
                <h2>{data.NomeCurso}</h2>
                <h2>{data.NomeTurma}</h2>
                <h2>{data.SiglaTurma}</h2>
                <h2>{data.Matricula}</h2>
                <h2>{data.NomeAluno}</h2>
                <h2>{data.StAlunoTurma}</h2>
              </div>
            ))
          )} */}
          
          
          {data.length === 0 ? (    // Comentado para aprovação com Miguel para alteração
            <p>Carregando..</p>
          ) : (
            data.map((data: Data, index) => (
              <div key={index} className="border-b border-black">
                <p>{data.label}</p>
                <p>{data.value}</p>
              </div>
            ))
          )}


        {/* {data.map((data, index) => (
            <div key={index} className="border-b border-black">
              <p>{data.label}</p>
              <p>{data.value}</p>
            </div>
        ))} */}
        </section>
      </main>
    </Card>
  );
}

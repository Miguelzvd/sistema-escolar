import axios from "axios";
import { Card } from "src/components/Card";
import { useEffect, useState } from "react";
import { LoadingDadosPessoais } from "src/components/Loading/LoadingDadosPessoais";

export function DadosPessoaisProfessor() {
  interface Data {
    label: string;
    value: string;
  }
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/alunos/");
      console.log(response.data);
      setData(response.data.result);
    } catch (error) {
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
          {data.length === 0 ? (
            <LoadingDadosPessoais />
          ) : (
            data.map((data: Data, index) => (
              <div key={index} className="border-b border-black">
                <p className="font-bold">{data.label}:</p>
                <p>{data.value}</p>
              </div>
            ))
          )}
        </section>
      </main>
    </Card>
  );
}

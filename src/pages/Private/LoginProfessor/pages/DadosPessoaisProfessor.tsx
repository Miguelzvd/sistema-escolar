 
import axios from "axios";
import { Card } from "src/components/Card";
import { useEffect, useState } from "react";

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
            <div className="p-4 col-span-1 md:col-span-2 lg:col-span-3">
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-6 py-1">
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-700 rounded col-span-1"/>
                      <div className="h-2 bg-slate-700 rounded col-span-1"/>
                      <div className="h-2 bg-slate-700 rounded col-span-1"/>
                    </div>
                    <div className="grid grid-cols-4 gap-5">
                      <div className="h-2 bg-slate-700 rounded col-span-1"/>
                      <div className="h-2 bg-slate-700 rounded col-span-2"/>
                      <div className="h-2 bg-slate-700 rounded col-span-1"/>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="h-2 bg-slate-700 rounded col-span-2"/>
                      <div className="h-2 bg-slate-700 rounded col-span-1"/>
                      <div className="h-2 bg-slate-700 rounded col-span-1"/>
                    </div>
                    <div className="grid grid-cols-4 gap-5">
                      <div className="h-2 bg-slate-700 rounded col-span-1"/>
                      <div className="h-2 bg-slate-700 rounded col-span-1"/>
                      <div className="h-2 bg-slate-700 rounded col-span-2"/>
                    </div>
    
                    <div className="grid grid-cols-4 gap-5">
                      <div className="h-2 bg-slate-700 rounded col-span-2"/>
                      <div className="h-2 bg-slate-700 rounded col-span-1"/>
                      <div className="h-2 bg-slate-700 rounded col-span-1"/>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-700 rounded col-span-1"/>
                      <div className="h-2 bg-slate-700 rounded col-span-1"/>
                      <div className="h-2 bg-slate-700 rounded col-span-1"/>
                    </div>
                    <div className="grid grid-cols-4 gap-5">
                      <div className="h-2 bg-slate-700 rounded col-span-2"/>
                      <div className="h-2 bg-slate-700 rounded col-span-1"/>
                      <div className="h-2 bg-slate-700 rounded col-span-1"/>
                    </div>
                    {/* <div className="h-2 bg-slate-700 rounded"></div> */}
                  </div>
                </div>
              </div>
            </div>

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

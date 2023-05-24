import { Card } from "../components";
import {Disciplines} from "../../../constants"


export function Notas() {

  return (
        
        <Card>
          {/* TITULO */}
          <header>
            <h1 className="text-secundary font-extrabold text-2xl">
              NOTAS
            </h1>
          </header>

          {/* TABELA */}

          <main className="text-white w-full flex flex-col items-center gap-4">

            <thead className="flex flex-col items-center w-full">
              <tr className="py-1 w-[95%] flex flex-row justify-around rounded-md bg-neutral-500">
              <th className="w-[20%] text-left"> <span className="ml-3">Disciplina </span> </th>
                <section className="flex flex-row justify-around rounded-md w-[80%]">
                  <th >Nota 1</th>
                  <th >Nota 2</th>
                  <th >Nota 3</th>
                  <th >Media</th>
                </section>
              </tr>
            </thead>

            <tbody className="flex flex-col items-center w-full gap-4">
              {Disciplines.map((discipline, index) => (
                <tr key={index} className=" w-[95%] py-1 flex flex-row justify-around rounded-md bg-neutral-400"
                >
                  <th className="w-[20%] text-left"> <span className="ml-3"> {discipline.title} </span> </th>
                  <section className="flex flex-row justify-around rounded-md w-[80%]">
                    <td >{discipline.nota1}</td>
                    <td >{discipline.nota2}</td>
                    <td >{discipline.nota3}</td>
                    <td >{discipline.media}</td>
                  </section>
                </tr>
              ))}
            </tbody>

            </main>
          </Card>
  );
}

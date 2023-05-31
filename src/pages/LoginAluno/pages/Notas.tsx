import { Card } from "../../../components/Card";
import { Disciplines } from "../../../constants";

export function Notas() {
  return (
    <Card title="NOTAS">
      {/* TABELA */}

      {/* <table className="text-white w-full h-full flex flex-col items-center justify-evenly gap-4">
        <thead className="flex flex-col items-center w-full ">
          <tr className="py-1 w-[95%] flex flex-row justify-around rounded-md bg-neutral-500">
            <th className="w-[20%] text-left">
              <span className="">Disciplina </span>
            </th>

            <th>Nota 1</th>
            <th>Nota 2</th>
            <th>Nota 3</th>
            <th>Media</th>
          </tr>
        </thead>

        <tbody className="flex flex-col items-center w-full gap-4">
          {Disciplines.map((discipline, index) => (
            <tr
              key={index}
              className=" w-[95%] py-1 flex flex-row justify-around rounded-md bg-neutral-400"
            >
              <th scope="row" className="w-[20%] text-left">
                <span className=""> {discipline.title} </span>
              </th>

              <td>{discipline.nota1}</td>
              <td>{discipline.nota2}</td>
              <td>{discipline.nota3}</td>
              <td>{discipline.media}</td>
            </tr>
          ))}
        </tbody>
      </table> */}

      <table className="text-white w-full h-full flex flex-col items-center justify-evenly gap-4">
        <thead className="flex flex-row justify-center w-full ">
          <tr className="w-[95%] flex flex-row justify-center">
            <td className="w-full">
              <table className="py-1 flex flex-row justify-around rounded-md bg-neutral-500">
                <thead className="w-[20%] ml-4">
                  <tr>
                    <th>Disciplina</th>
                  </tr>
                </thead>
                <tbody className="w-[80%]">
                  <tr className="flex flex-row justify-around">
                    <th>Nota 1</th>
                    <th>Nota 2</th>
                    <th>Nota 3</th>
                    <th>Media</th>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </thead>

        <tbody className="flex flex-col items-center w-full">
          <tr className="w-[95%]">
              <td className="w-full flex flex-col gap-4 rounded-md">
                {Disciplines.map((discipline, index) => (
                  <table
                    key={index}
                    className="w-full bg-neutral-400 flex flex-row justify-around rounded-md"
                  >
                    <thead className="w-[20%] ml-4">
                      <tr>
                        <th >
                          {discipline.title}
                        </th>
                      </tr>
                    </thead>

                    <tbody className="w-[80%]">
                      <tr className="flex flex-row justify-around">
                        <td>{discipline.nota1}</td>
                        <td>{discipline.nota2}</td>
                        <td>{discipline.nota3}</td>
                        <td>{discipline.media}</td>
                      </tr>
                    </tbody>
                  </table>
                ))}
            </td>
          </tr>
        </tbody>
      </table>

      {/* 
      <table className="w-full text-sm text-left text-white font-roboto">
        <thead className="text-md md:text-lg uppercase bg-neutral-500">
          <tr className="border-b">
            <th scope="col" className="px-10 py-3">
              Disciplina
            </th>
            <th scope="col" className="px-6 py-3">
              Nota 1
            </th>
            <th scope="col" className="px-6 py-3">
              Nota 2
            </th>
            <th scope="col" className="px-6 py-3">
              Nota 3
            </th>
            <th scope="col" className="px-6 py-3">
              Média
            </th>
          </tr>
        </thead>
        <tbody>
          {Disciplines.map((discipline, index) => (
            <tr key={index} className="border-b  bg-zinc-400">
              <th
                scope="row"
                className="px-10 py-4 font-medium whitespace-nowrap"
              >
                {discipline.title}
              </th>
              <td className="px-10 py-4">{discipline.nota1}</td>
              <td className="px-10 py-4">{discipline.nota2}</td>
              <td className="px-10 py-4">{discipline.nota3}</td>
              <td className="px-10 py-4">{discipline.media}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </Card>
  );
}

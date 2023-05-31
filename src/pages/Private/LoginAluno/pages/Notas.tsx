import { Card } from "../../../../components/Card";
import { Disciplines } from "../../../../constants";

export function Notas() {
  return (
    <Card title="NOTAS">
      {/* TABELA */}

      {Disciplines.length === 0 ? (
        <div className="w-[95%] col-span-1 md:col-span-2 lg:col-span-3">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="space-y-3">
              <div className="h-3 bg-slate-700 rounded"/>
              <div className="h-3 bg-slate-700 rounded"/>
              <div className="h-3 bg-slate-700 rounded"/>
              <div className="h-3 bg-slate-700 rounded"/>
              <div className="h-3 bg-slate-700 rounded"/>
              <div className="h-3 bg-slate-700 rounded"/>
              <div className="h-3 bg-slate-700 rounded"/>
              <div className="h-3 bg-slate-700 rounded"/>
              <div className="h-3 bg-slate-700 rounded"/>
              <div className="h-3 bg-slate-700 rounded"/>
              <div className="h-3 bg-slate-700 rounded"/>
              <div className="h-3 bg-slate-700 rounded"/>
              <div className="h-3 bg-slate-700 rounded"/>
            </div>
          </div>
        </div>
      </div>
      ) : (
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
                    className="w-full bg-neutral-400 flex flex-row justify-around rounded-md py-1"
                  >
                    <thead className="w-[20%] ml-4">
                      <tr>
                        <th >
                          {discipline.title}
                        </th>
                      </tr>
                    </thead>

                    <tbody className="w-[80%]">
                      <tr className="flex flex-row justify-around ">
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
      )}
      
    </Card>
  );
}

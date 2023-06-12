import { Button } from "src/components";
import { Card } from "src/components/Card";
import { CustomInput } from "src/components/CustomInputs/CustomInput";
import { Disciplines } from "src/constants";

export function NotasProfessor() {
  return (
    <Card title="NOTAS">
      {/* TABELA */}

      {Disciplines.length === 0 ? (
        <div className="w-[95%] col-span-1 md:col-span-2 lg:col-span-3">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="space-y-3">
                <div className="h-3 bg-slate-700 rounded" />
                <div className="h-3 bg-slate-700 rounded" />
                <div className="h-3 bg-slate-700 rounded" />
                <div className="h-3 bg-slate-700 rounded" />
                <div className="h-3 bg-slate-700 rounded" />
                <div className="h-3 bg-slate-700 rounded" />
                <div className="h-3 bg-slate-700 rounded" />
                <div className="h-3 bg-slate-700 rounded" />
                <div className="h-3 bg-slate-700 rounded" />
                <div className="h-3 bg-slate-700 rounded" />
                <div className="h-3 bg-slate-700 rounded" />
                <div className="h-3 bg-slate-700 rounded" />
                <div className="h-3 bg-slate-700 rounded" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <table className="text-white w-full h-full flex flex-col items-center justify-evenly gap-4">
          <thead className="flex flex-row justify-center w-full">
            <tr className="w-[95%] flex flex-row justify-center">
              <td className="w-full">
                <table className="py-2 flex flex-row justify-between items-center rounded-md bg-neutral-500">
                  <thead className="w-[50%]">
                    <tr className="flex flex-row justify-around text-xl">
                      <th className="w-[30%]">Turma</th>
                      <th className="w-[30%]">Série</th>
                      <th className="w-[30%]">Disciplina</th>
                    </tr>
                  </thead>
                  <tbody className="w-[40%] flex flex-row items-center">
                    <tr className="w-full mr-2">
                        <CustomInput
                          inputType="text"
                          name="tumar"
                          placeHolder="Pesquisar turma"
                          search={true}
                        />
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
                    className="w-full bg-neutral-400 flex flex-row rounded-md py-1 items-center"
                  >
                    <thead className="w-[50%]">
                      <tr className="flex flex-row justify-around text-xl">
                        <th className="w-[30%]">Turma A</th>
                        <th className="w-[30%]">1°</th>
                        <th className="w-[30%]">{discipline.title}</th>
                      </tr>
                    </thead>

                    <tbody className="w-[40%]">
                      <tr className="flex flex-row justify-around ">
                        <Button text="Digitar Notas"/>
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

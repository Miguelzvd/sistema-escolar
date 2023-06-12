import { Button } from "src/components";
import { Card } from "src/components/Card";
import { CustomInput } from "src/components/CustomInputs/CustomInput";
import { LoadingNotas } from "src/components/Loading";
import { Disciplines } from "src/constants";

export function NotasProfessor() {
  return (
    <Card title="NOTAS">
      {/* TABELA */}

      {Disciplines.length === 0 ? (
        <LoadingNotas/>
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
                  <tbody className="w-[40%]">
                    <tr className="flex flex-row mr-2">
                      <td className="grow">
                        <CustomInput
                          inputType="text"
                          name="tumar"
                          placeHolder="Pesquisar turma"
                          search={true}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </thead>

          <tbody className="flex flex-col items-center w-full ">
            <tr className="w-[95%] ">
              <td className="w-full flex flex-col gap-4 rounded-md h-128 overflow-y-scroll scrollw">
                {Disciplines.map((discipline, index) => (
                  <table
                    key={index}
                    className="w-full bg-neutral-400 flex flex-row justify-between rounded-md py-2 items-center "
                  >
                    <thead className="w-[50%]">
                      <tr className="flex flex-row justify-around text-xl">
                        <th className="w-[30%]">Turma A</th>
                        <th className="w-[30%]">1°</th>
                        <th className="w-[30%]">{discipline.title}</th>
                      </tr>
                    </thead>

                    <tbody className="w-[40%]">
                      <tr className="flex flex-row mr-2">
                        <td className="grow">
                          <Button
                            text="Digitar Notas"
                            color="bg-teal-500"
                            hoverBG="hover:bg-teal-600"
                            padding="p-1"
                            onClick={()=> console.log("click")}
                          />
                        </td>
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

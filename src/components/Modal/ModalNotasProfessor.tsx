import { IoClose } from "react-icons/io5";
import { Button } from "..";
import { Disciplines } from "src/constants";
import { CustomInput } from "src/components/CustomInputs";

type Turma = {
  NomeTurma: string;
  Série: string;
  Disciplina: string;
  Alunos: {
      AlunoNome: string;
      AlunoNota_1: string;
      AlunoNota_2: string;
      AlunoNota_3: string;
      Media: string;
  };
}

// {data?.map((data) => data.NomeTurma)}
type Props = {
  isOpen: boolean;
  setModalOpen: React.MouseEventHandler<HTMLButtonElement> | undefined;
  data: Turma | null;
};

export function ModalNotasProfessor({ isOpen, setModalOpen, data }: Props) {
  if (isOpen) {
    return (
      <main className="fixed top-0 left-0 flex items-center justify-center overflow-scroll w-full h-full z-10">
        <section className="bg-white md:bg-black md:opacity-30 fixed w-full h-full top-0 left-0" />
        <section className=" w-full md:w-224 h-screen md:h-fit flex flex-col p-4 rounded-lg md:shadow-lg bg-white z-10 gap-2">
          <div className="w-full flex flex-col items-end ">
            <button onClick={setModalOpen} className="Button">
              <IoClose size={30} />
            </button>
            <div className="my-4 w-[95%] m-auto flex justify-between">
              <h1 className="text-2xl font-bold">Português</h1>
              <h2 className="text-xl">Turma A</h2>
            </div>
          </div>
          <table className="sm:text-xs text-white w-full h-128 flex flex-col items-center gap-4 bg-neutral-200 py-4 rounded-md">
            <thead className="w-[95%] bg-neutral-500 py-2 px-4 sm:px-0 rounded-md ">
              <tr className="w-full flex flex-row justify-around items-center text-xl">
                <th className="w-[20%]">Nome do Aluno</th>
                <th className="w-[10%]">Nota 1</th>
                <th className="w-[10%]">Nota 2</th>
                <th className="w-[10%]">Nota 3</th>
                <th className="w-[10%]">Média</th>
              </tr>
            </thead>

            <tbody className="w-[95%] flex flex-col gap-4 rounded-md h-[100%] overflow-y-scroll scrollw">
              {Disciplines.map((_discipline, index) => (
                <tr
                  key={index}
                  className="w-full bg-neutral-400 rounded-md py-2 flex flex-row items-center justify-around text-xl"
                >
                  <td className="ml-4 overflow-hidden text-left items-center flex w-[20%]">
                    XXXXXXXXXXXXX
                  </td>
                  <td className="w-[10%] ">
                    <CustomInput name="nota1" inputType="text" />
                  </td>
                  <td className="w-[10%] mx-2">
                    <CustomInput name="nota1" inputType="text" />
                  </td>

                  <td className="w-[10%]">
                    <CustomInput name="nota1" inputType="text" />
                  </td>
                  <td className="w-[10%]  flex justify-center">00,00</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 w-full flex justify-center">
            <div className="w-80">
              <Button text="Salvar" />
            </div>
          </div>
        </section>
      </main>
    );
  } else return null;
}

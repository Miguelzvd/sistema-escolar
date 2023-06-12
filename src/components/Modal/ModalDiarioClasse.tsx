import { IoClose } from "react-icons/io5";

type DiarioClasse = {
  materia: string;
  data: string;
  texto: string;
};

type Props = {
  isOpen: boolean;
  setModalOpen: React.MouseEventHandler<HTMLButtonElement> | undefined;
  data: DiarioClasse | null;
};

export function ModalDiarioClasse({ isOpen, setModalOpen, data }: Props) {
  if (isOpen) {
    return (
      <main className="fixed top-0 left-0 flex items-center justify-center w-full h-full z-10">
        <section className="bg-black opacity-30 fixed w-full h-full top-0 left-0" />
        <section className="bg-white w-224 h-128 p-4 rounded-lg shadow-lg z-10 flex flex-colflex flex-col gap-2">
          <div className="w-full flex flex-row justify-end">
            <button onClick={setModalOpen} className="Button">
              <IoClose size={30} />
            </button>
          </div>
          <div className="w-full flex flex-row items-center justify-between mt-2">
            <h2 className="text-xl font-bold">{data?.materia}</h2>
            <p className="text-xl font-medium">{data?.data}</p>
          </div>
          <div className="h-full w-full p-2 bg-neutral-300 shadow-md border border-gray-400 rounded-md overflow-auto scrollw">
            <p>{data?.texto}</p>
          </div>
        </section>
      </main>
    );
  } else return null;
}

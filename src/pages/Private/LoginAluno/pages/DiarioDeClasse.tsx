import { useState } from "react";
import { ModalDiarioClasse } from "src/components";
import { Card } from "src/components/Card";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import { DiarioClasse } from "src/constants/DiarioClasse";

//O metodo Object.freeze() previne que um objeto seja modificado
const diarioClasse = Object.freeze(DiarioClasse);

type DiarioClasse = {
  materia: string;
  data: string;
  texto: string;
};

export function DiarioDeClasse() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedData, setSelectedData] = useState<DiarioClasse | null>(null);
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 3;

  const handleClickNext = () => {
    if (page < Math.ceil(diarioClasse.length / PAGE_SIZE)) setPage(page + 1);
    else return;
  };

  const handleClickPrevious = () => {
    if (page > 1) setPage(page - 1);
    else return;
  };

  const handleOpenModal = (data: DiarioClasse | null) => {
    setOpenModal(true);
    setSelectedData(data);
  };

  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const diarioClassePaginated = diarioClasse.slice(startIndex, endIndex);
  const pages = (diarioClasse.length / PAGE_SIZE)
  
  return (
    < >
      <Card title="DIÁRIO DE CLASSE">
        <main className="w-[95%] h-[25rem] select-none flex flex-col justify-between">
          {diarioClassePaginated.map((data, index) => (
            <section
              onClick={() => handleOpenModal(data)}
              key={index}
              className="bg-gray-200 h-24 w-full border border-slate-300 rounded-lg truncate shadow-sm hover:shadow-md hover:cursor-pointer duration-200 "
            >
              <div className="w-[98%] m-auto flex flex-col gap-1">
                <div className="mt-2 h-fit flex flex-row justify-between">
                  <h2 className="text-lg font-bold">{data.materia}</h2>
                  <p className="font-semibold">{data.data}</p>
                </div>
                <div className="h-[1px] w-full bg-black" />
                <span className="mt-2">{data.texto}</span>
              </div>
            </section>
          ))}
          <section className="flex flex-row w-full  justify-center items-center gap-4 mt-4">
            <div className="w-6 h-6">
              <button className={`Button ${page <= 1 ? "hidden": "static"}`} onClick={handleClickPrevious}>
                <IoCaretBack />
              </button>
            </div>

            <p className="font-bold">
              {page} / {Math.ceil(pages)}
            </p>

            <div className="w-6 h-6">
              <button className={`Button ${page >= pages ? "hidden": "static"}`} onClick={handleClickNext}>
                <IoCaretForward />
              </button>
            </div>

          </section>
        </main>
      </Card>

      <ModalDiarioClasse
        isOpen={openModal}
        setModalOpen={() => setOpenModal(false)}
        data={selectedData}
      />
    </>
  );
}

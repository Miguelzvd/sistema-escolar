import { useState } from "react";
import { Card } from "../../../../components/Card";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import { Modal } from "../../../../components";

const PAGE_SIZE = 3;

const diarioClasse = Object.freeze([
  {
    materia: "Matematica",
    data: "20/06/2023",
    texto:
      "Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto",
  },
  {
    materia: "Portugues",
    data: "12/06/2023",
    texto:
      "Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto",
  },
  {
    materia: "Geografia",
    data: "02/06/2023",
    texto:
      "Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto",
  },
]);

type DiarioClasse = {
  materia: string;
  data: string;
  texto: string;
};

export function DiarioDeClasse() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedData, setSelectedData] = useState<DiarioClasse | null>(null);
  const [page, setPage] = useState(1);

  const handleClickNext = () => {
    if (page < Math.ceil(diarioClasse.length / PAGE_SIZE)) setPage(page + 1);
    else return;
  };

  const handleClickPrevious = () => {
    if (page > 1) setPage(page - 1);
    else return;
  };

  const handleClickOpenModal = (data: DiarioClasse | null) => {
    setOpenModal(true);
    setSelectedData(data);
  };

  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const diarioClassePaginated = diarioClasse.slice(startIndex, endIndex);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Card title="DIÁRIO DE CLASSE">
        <main className="w-[95%] flex flex-col gap-4">
          {diarioClassePaginated.map((data, index) => (
            <section
              onClick={() => handleClickOpenModal(data)}
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
          <section className="flex flex-row w-full justify-center items-center gap-4 mt-4">
            <div className="arrowButton" onClick={handleClickPrevious}>
              <IoCaretBack />
            </div>
            <p className="font-bold select-none">
              {page} / {Math.ceil(diarioClasse.length / PAGE_SIZE)}
            </p>
            <div className="arrowButton" onClick={handleClickNext}>
              <IoCaretForward />
            </div>
          </section>
        </main>
      </Card>

      <Modal
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
        data={selectedData}
      />
    </div>
  );
}

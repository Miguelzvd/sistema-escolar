import { useState } from "react";
import { Card } from "../../../../components/Card";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";

const diarioClasse = [
  {
    materia: "Matematica",
    data: "20/06/2023",
    texto:"Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto"
  },
  {
    materia: "Portugues",
    data: "20/06/2023",
    texto:"Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto"
  },
  {
    materia: "Geografia",
    data: "20/06/2023",
    texto:"Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto"
  },
]



export function DiarioDeClasse() {
  const [page, setPage] = useState(0);

  const handleClickNext = () => {
    if (page === diarioClasse.length - 1) return;
    else setPage(page + 1)
  };

  const handleClickPrevious = () => {
    if (page === 0) return;
    else{
      setPage(page - 1);
    }
  };

  return (
    <Card title="DIÁRIO DE CLASSE">
      <main className="w-[95%] flex flex-col gap-4">
        {diarioClasse.map((data, index) => (
          <section
          onClick={() => console.log("click")} 
          key={index} className="bg-neutral-300 h-20 w-full rounded-lg truncate shadow-sm hover:shadow-md hover:cursor-pointer duration-200 ">
            <div className="w-[98%] m-auto flex flex-col gap-1">
              <div className="mt-2 h-fit flex flex-row justify-between">
                <h2 className="text-lg font-bold">{data.materia}</h2>
                <p className="font-semibold">{data.data}</p>
              </div>
              <span>
                {data.texto}
              </span>
            </div>
          </section>))
        }

        {/* +3 && -3 */}
        <section className="flex flex-row w-full justify-center items-center gap-4 mt-4">
          <div className="arrowButton" onClick={handleClickPrevious}>
            <IoCaretBack />
          </div>
          <p className="font-bold select-none">
            {page + 1} / {diarioClasse.length}
          </p>
          <div className="arrowButton" onClick={handleClickNext}>
            <IoCaretForward />
          </div>
        </section>

      </main>
    </Card>
  );
}

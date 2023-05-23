export function Notas() {
  const disciplines = [
    {
      title: "Portugues",
      nota1: 10,
      nota2: 10,
      nota3: 10,
      media: 10,
    },
    {
      title: "Redação",
      nota1: 10,
      nota2: 10,
      nota3: 10,
      media: 10,
    },
    {
      title: "Ingles",
      nota1: 10,
      nota2: 10,
      nota3: 10,
      media: 10,
    },
    {
      title: "Matematica",
      nota1: 10,
      nota2: 10,
      nota3: 10,
      media: 10,
    },
    {
      title: "Geografia",
      nota1: 10,
      nota2: 10,
      nota3: 10,
      media: 10,
    },
    {
      title: "Quimica",
      nota1: 10,
      nota2: 10,
      nota3: 10,
      media: 10,
    },
    {
      title: "Filosofia",
      nota1: 10,
      nota2: 10,
      nota3: 10,
      media: 10,
    },
  ];

  return (
    <>
      <main className="min-h-screen w-full flex flex-row justify-center items-center">
        <div
          className=" 
          bg-slate-200 
          w-224 h-fit
          gap-4
          py-2
          mx-2
          flex flex-col
          items-center
          border rounded-md border-slate-300
          shadow-sm drop-shadow-md
          "
        >
          {/* TITULO */}
          <header>
            <h1 className="text-secundary font-extrabold text-2xl text-center">
              Notas
            </h1>
          </header>
          {/* TABELA */}

          <table className="w-full flex flex-col items-center gap-4">
            <thead className="text-white py-1 grid grid-flow-col grid-rows-1 justify-evenly w-[95%] rounded-md bg-neutral-500">
              <th>Disciplina</th>
              <th>Nota1</th>
              <th>Nota2</th>
              <th>Nota3</th>
              <th>Media</th>
            </thead>

            <tbody className="py-1 flex flex-col w-[95%] gap-4">
              {disciplines.map((discipline, index) => (
                <tr
                  key={index}
                  className="text-white py-1 grid grid-flow-col grid-rows-1 justify-evenly rounded-md bg-neutral-400"
                >
                  <td>{discipline.title}</td>
                  <td>{discipline.nota1}</td>
                  <td>{discipline.nota2}</td>
                  <td>{discipline.nota3}</td>
                  <td>{discipline.media}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

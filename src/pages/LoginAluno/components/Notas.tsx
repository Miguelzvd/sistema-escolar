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
      <div className="min-h-screen w-224 flex flex-row items-center m-auto">
        <main
          className=" 
          bg-slate-200 
          w-128 h-fit
          md:w-224
          gap-4
          py-8
          mx-2
          flex flex-col
          items-center
          border rounded-md border-slate-300
          shadow-sm drop-shadow-md
          "
        >
          {/* TITULO */}
          <header>
            <h1 className="text-secundary font-extrabold text-2xl">
              NOTAS
            </h1>
          </header>

          {/* TABELA */}

          <table className="text-white w-full flex flex-col items-center gap-4">

            <thead className="flex flex-col items-center w-full">
              <tr className="py-1 w-[95%] flex flex-row justify-around rounded-md bg-neutral-500">
                  <th className=" w-[20%]">Disciplina</th>
                <section className="flex flex-row justify-around rounded-md w-[80%]">
                  <th >Nota1</th>
                  <th >Nota2</th>
                  <th >Nota3</th>
                  <th >Media</th>
                </section>
              </tr>
            </thead>

            <tbody className="flex flex-col items-center w-full gap-4">
              {disciplines.map((discipline, index) => (
                <tr key={index} className=" w-[95%] py-1 flex flex-row justify-around rounded-md bg-neutral-400"
                >
                  <th className="w-[20%]"> {discipline.title}</th>
                  <section className="flex flex-row justify-around rounded-md w-[80%]">
                    <td >{discipline.nota1}</td>
                    <td >{discipline.nota2}</td>
                    <td >{discipline.nota3}</td>
                    <td >{discipline.media}</td>
                  </section>
                </tr>
              ))}
            </tbody>

          </table>

        </main>
      </div>
  );
}

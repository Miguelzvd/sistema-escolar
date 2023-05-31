import Typed from "react-typed";


export  function Hero() {
  return (
    <main className="text-black max-w-[850px] w-full mt-[100px] h-full mx-auto flex text-center flex-col justify-start ">
      <section className="h-[55vh] flex flex-col justify-center font-bold text-white mb-[20rem]">
        <h1 className="text-4xl md:text-5xl p-4">
          Sistema de Gerenciamento Escolar
        </h1>
        <div className="text-xl sm:text-2xl md:text-3xl">
          <span>Desenvolvido por: </span>
          <Typed
            className="text-sky-500"
            strings={["Miguel", "Rodrigo", "Henrique"]}
            typeSpeed={120}
            backSpeed={140}
            backDelay={2000}
            loop
          />
        </div>
      </section>
    </main>
  );
}

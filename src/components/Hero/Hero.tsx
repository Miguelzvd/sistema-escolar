import Typed from "react-typed";

import { Card } from "./Card";
import { HeroCardsData, HeroCardsData2 } from "../../constants/HeroCardsData";

export default function Hero() {
  return (
    <main className="text-black max-w-[850px] w-full mt-[100px] h-full mx-auto flex text-center flex-col justify-start">
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

      <div className="bg-black h-[2px] w-full" />

      <section className="mt-24 8 w-full h-fit p-5 flex flex-col justify-center gap-12 mb-24">
        <h1 className="text-3xl md:text-4xl font-bold font-roboto text-white">
          Tecnologias utilizadas
        </h1>
        {/* Card Container */}
        <div>
          <div className="w-full p-0 md:p-8 grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 duration-300">
            {/* Card */}
            {HeroCardsData.map((data, index) => (
              <Card
                key={index}
                title={data.title}
                text={data.text}
                Icon={data.icon}
                Shadowcolor={data.Shadowcolor}
              />
            ))}
          </div>

          <div className="w-full mt-10 md:mt-0 px-0 md:px-40 grid md:grid-flow-col grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 duration-300">
            {HeroCardsData2.map((data, index) => (
              <Card
                key={index}
                title={data.title}
                text={data.text}
                Icon={data.icon}
                Shadowcolor={data.Shadowcolor}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="bg-black h-[2px] w-full" />

      <section className="mt-24 font-roboto h-screen text-white text-justify p-5 flex flex-col justify-center gap-10">
        <h1 className="text-3xl md:text-4xl font-bold">Sobre</h1>
        {/* Conteudo */}
        <div className="w-[60%]">
          O sistema de gestão escolar foi desenvolvido com o objetivo de
          facilitar o acesso às informações da instituição, dos gestores e dos
          alunos. A plataforma permitirá que os pais possam buscar e analisar o
          status de matrícula, bem como o desempenho individual por disciplina,
          além de proporcionar um contato direto com a equipe pedagógica. Para
          alcançar esses objetivos, forão utilizadas as ferramentas de
          desenvolvimento web, como o Node.js, que será responsável pelo
          gerenciamento do backend, e a biblioteca Javascript React para a
          interface de usuário. Ambos serão integrados a um banco de dados
          programado em MySQL. Com essa abordagem moderna e organizada,
          espera-se criar uma solução eficiente para o gerenciamento das
          atividades escolares.
        </div>
      </section>
      <footer></footer>
    </main>
  );
}

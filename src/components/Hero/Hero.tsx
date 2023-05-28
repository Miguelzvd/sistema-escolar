import Typed from "react-typed";

import { Card } from "./Card";
import { HeroCardsData } from "../../constants/HeroCardsData";

export default function Hero() {
  

  return (
    <main className="text-black max-w-[850px] w-full mt-[100px] h-full mx-auto flex text-center flex-col justify-start">
      <section className="font-bold text-white">
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

      <section className="mt-32 mb-8 w-full h-fit flex flex-col items-center gap-12 ">
        <h1 className="text-3xl md:text-4xl font-bold font-roboto text-white">
          Tecnologias utilizadas
        </h1>
        {/* Card Container */}
        <div className="w-full bg-slate-400 p-5 grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-stretch duration-300">
          {/* Card */}
          {HeroCardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              text={card.text}
              Icon={card.icon}
              Shadowcolor={card.Shadowcolor}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

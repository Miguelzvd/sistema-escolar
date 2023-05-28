import Typed from "react-typed";

import { Card } from "./Card";
import {
  HeroCardsData,
  HeroCardsData2,
} from "../../../constants/HeroCardsData";

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

      <div className="bg-black h-[2px] w-full" />

      <section className="mt-24 8 w-full h-fit p-5 flex flex-col justify-center gap-12 mb-24">
        <h1 className="text-3xl md:text-4xl font-bold font-roboto text-white">
          Tecnologias utilizadas
        </h1>
        {/* Card Container */}
        <div>
          <div className="w-full p-0 md:p-8 grid grid-flow-row md:grid-cols-3 gap-10 md:gap-8 duration-300">
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

          <div className="w-full mt-10 md:mt-0 px-0 md:px-40 grid md:grid-flow-col md:grid-cols-2 gap-10 md:gap-8 duration-300">
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

      <footer></footer>
    </main>
  );
}

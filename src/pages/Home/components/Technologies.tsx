import { Card } from "./Card";
import {
  HeroCardsData,
  HeroCardsData2,
} from "../../../constants/HeroCardsData";


export default function Technologies() {
  return (
    <section className="mt-24 m-auto max-w-[850px] w-full h-fit p-5 flex flex-col items-center gap-12 mb-24">
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
  );
}

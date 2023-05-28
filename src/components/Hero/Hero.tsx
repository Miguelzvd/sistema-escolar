import Typed from "react-typed";
import { VitejsIcon, ReactIcon, NodejsIcon } from "../../iconComponents/HomeScreen";
import { Card } from "./Card";

export default function Hero() {
  return (
    <main className="text-black max-w-[850px] w-full mt-[100px] h-full mx-auto flex text-center flex-col justify-start">
      <section className="font-bold text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl p-4">
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

      <section className="mt-32 w-full h-fit flex flex-col items-center gap-12">
        <h1 className="text-5xl font-bold font-roboto text-white">Tecnologias utilizadas</h1>
        {/* Card Container */}
        <div className="w-full grid grid-flow-row grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center duration-300">
          
          {/* Card */}
          <Card
            title="Vitejs"
            text="Vite.js é um construtor de aplicações web extremamente rápido e leve, que oferece uma experiência de desenvolvimento moderna e eficiente."
          >
            <VitejsIcon height={20} width={20} />
          </Card>

          {/* Card */}
          <Card
            title="React"
            text="React é uma biblioteca JavaScript popular para criar interfaces de usuário interativas e reutilizáveis, amplamente usada no desenvolvimento web."
          >
            <ReactIcon width={20} height={20} />
          </Card>

          {/* Card */}
          <Card
            title="Vitejs"
            text="Vite.js é um construtor de aplicações web extremamente rápido e leve, que oferece uma experiência de desenvolvimento moderna e eficiente."
          >
            <NodejsIcon height={20} width={20} />
          </Card>

          {/* Card */}
          <Card
            title="Vitejs"
            text="Vite.js é um construtor de aplicações web extremamente rápido e leve, que oferece uma experiência de desenvolvimento moderna e eficiente."
          >
            <NodejsIcon height={20} width={20} />
          </Card>

          {/* Card */}
          <Card
            title="Vitejs"
            text="Vite.js é um construtor de aplicações web extremamente rápido e leve, que oferece uma experiência de desenvolvimento moderna e eficiente."
          >
            <NodejsIcon height={20} width={20} />
          </Card>

          
        </div>
      </section>
    </main>
  );
}

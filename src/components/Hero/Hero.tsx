import Typed from "react-typed";
import { VitejsIcon, ReactIcon, NodejsIcon, TailwindIcon, MySQLIcon } from "../../iconComponents/HomeScreen";
import { Card } from "./Card";

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
        <h1 className="text-3xl md:text-4xl font-bold font-roboto text-white">Tecnologias utilizadas</h1>
        {/* Card Container */}
        <div className="w-full grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 duration-300">
          
          {/* Card */}
          <Card
            Shadowcolor="hover:shadow-yellow-500"
            title="Vitejs"
            text="Vite.js é um construtor de aplicações web extremamente rápido e leve, que oferece uma experiência de desenvolvimento moderna e eficiente."
          >
            <VitejsIcon height={25} width={25} />
          </Card>

          {/* Card */}
          <Card
            Shadowcolor="hover:shadow-sky-500"
            title="React"
            text="React é uma biblioteca JavaScript popular para criar interfaces de usuário interativas e reutilizáveis, amplamente usada no desenvolvimento web."
          >
            <ReactIcon width={25} height={25} />
          </Card>

          {/* Card */}
          <Card
            Shadowcolor="hover:shadow-indigo-800"
            title="Tailwind"
            text="Tailwind é um framework CSS altamente configurável e de baixo nível que permite estilizar rapidamente elementos de interface."
          >
            <TailwindIcon height={25} width={25} />
          </Card>

          {/* Card */}
          <Card
            Shadowcolor="hover:shadow-lime-400"
            title="Nodejs"
            text="Node.js é um interpretador JavaScript rápido e versátil, ideal para trabalhar com processos, arquivos, soquetes de rede e APIs de servidor."
          >
            <NodejsIcon height={25} width={25} />
          </Card>

          {/* Card */}
          <Card
            Shadowcolor="hover:shadow-sky-700"
            title="MySQL"
            text="MySQL é um sistema de gerenciamento de banco de dados relacional, que oferece uma estrutura robusta e eficiente para armazenar e gerenciar dados em aplicações."
          >
            <MySQLIcon height={25} width={25} />
          </Card>

          
        </div>
      </section>
    </main>
  );
}

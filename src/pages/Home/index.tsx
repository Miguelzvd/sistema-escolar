import { Hero, About } from "./components";
import { Nav } from "./components/Nav";
import Technologies from "./components/Technologies";

export function Home() {
  return (
    <>
      <div className="bg-primary min-h-screen ">
        <Nav />
        <Hero />
        <div className="bg-black h-[2px] max-w-[850px] w-full m-auto" />
        <Technologies/>
        <div className="bg-black h-[2px] max-w-[850px] w-full m-auto" />
        <About />
      </div>
    </>
  );
}

import { Hero, About } from "./components";
import { Nav } from "./components/Nav";

export function Home() {
  return (
    <>
      <div className="bg-[#1E1E20] min-h-screen w-full">
        <Nav />
        <Hero />
        <About />
      </div>
    </>
  );
}

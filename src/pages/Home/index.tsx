import { Hero, About } from "./components";
import { Nav } from "./components/Nav";

export function Home() {
  return (
    <>
      <div className="bg-home min-h-screen w-full">
        <Nav />
        <Hero />
        <About />
      </div>
    </>
  );
}

import Hero from "../../components/Hero/Hero";
import { Nav } from "../../components/Nav"

export function Home() {

  return (
    <>
      <div className="bg-[#1E1E20] min-h-screen w-full">
        <Nav />
        <Hero />
      </div>
    </>
  );
}

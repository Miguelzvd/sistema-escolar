import { Nav } from "../../components";

export function Home() {
  return (
    <>
      <header>
        <Nav/>
      </header>
      {console.log(import.meta.env.VITE_APP_API)}

    </>
  );
}

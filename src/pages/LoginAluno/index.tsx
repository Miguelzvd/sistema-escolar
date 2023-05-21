import { Boletim } from "./components/Boletim";
import { SideMenu } from "./components/SideMenu";

export function LoginAluno() {
  return (
    <>
      {/* SIDE MENU */}
      <div className="flex flex-row overflow-auto min-h-screen w-full ">
        <SideMenu/>
        <Boletim/>
      </div>
    </>
  );
}

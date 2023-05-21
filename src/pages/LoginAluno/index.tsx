import { SideMenu } from "../../components";
import { Boletim } from "./components/Boletim";

export function LoginAluno() {

  return (
    <>
      {/* SIDE MENU */}
      <div className="flex flex-row overflow-auto min-h-screen w-full ">
        <SideMenu />
        <Boletim></Boletim>
      </div>
    </>
  );
}

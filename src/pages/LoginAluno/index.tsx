import { Boletim } from "./components/Boletim";
import { SideMenu } from "./components/SideMenu";

export function LoginAluno() {
  return (
    <>
      {/* SIDE MENU */}
      <div className="flex">
        <SideMenu></SideMenu>

        <Boletim />
      </div>
    </>
  );
}

import { Outlet } from "react-router-dom";
import { SideMenu } from "../../../components";
import { SideMenuDataStudent } from "../../../constants/SideMenuDataStudent";

export function LoginAluno() {
  return (
    <>
      <div className="flex flex-row scrollbar-thin overflow-auto min-h-screen w-full">
        <SideMenu menuItems={SideMenuDataStudent} />
        <Outlet />
      </div>
    </>
  );
}

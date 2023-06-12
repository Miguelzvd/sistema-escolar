import { Outlet } from "react-router-dom";
import { SideMenu } from "src/components";
import { SideMenuDataStudent } from "src/constants";

export function LoginAluno() {
  return (
    <>
      <div className="flex flex-row scrollbar-thin overflow-auto min-h-screen w-full">
        <div className="min-h-screen">
          <SideMenu menuItems={SideMenuDataStudent} />
        </div>
        <Outlet />
      </div>
    </>
  );
}

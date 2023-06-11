import { Outlet } from "react-router-dom";
import { SideMenu } from "src/components";
import { SideMenuDataTeacher } from "src/constants";

export function LoginProfessor() {
  return (
    <>
      <div className="flex flex-row scrollbar-thin overflow-auto min-h-screen w-full">
        <SideMenu menuItems={SideMenuDataTeacher} />
        <Outlet />
      </div>
    </>
  );
}

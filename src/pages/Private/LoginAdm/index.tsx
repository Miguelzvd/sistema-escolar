import { Outlet } from "react-router-dom";
import { SideMenu } from "../../../components";
import { SideMenuDataAdm } from "../../../constants";

export function LoginAdm() {
  return (
    <>
      <div className="flex flex-row scrollbar-thin overflow-auto min-h-screen w-full">
        <div className="min-h-screen">
          <SideMenu menuItems={SideMenuDataAdm} />
        </div>
        <Outlet />
      </div>
    </>
  );
}

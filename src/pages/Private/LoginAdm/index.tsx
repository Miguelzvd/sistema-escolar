import { Outlet } from "react-router-dom";
import { SideMenu } from "../../../components";
import { SideMenuDataAdm } from "../../../constants/SideMenuData";

export function LoginAdm() {
  return (
    <>
      <div className="flex flex-row scrollbar-thin overflow-auto min-h-screen w-full">
        <SideMenu menuItems={SideMenuDataAdm} />
        <Outlet />
      </div>
    </>
  );
}

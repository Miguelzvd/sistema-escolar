import { Outlet } from "react-router-dom";
import { SideMenu } from "../../components";
import { SideMenuDataStudent } from "../../constants/SideMenuDataStudent";

export function LoginAluno() {


  return (
    <>
      {/* SIDE MENU */}
      <div className="flex flex-row overflow-auto min-h-screen w-full ">
        <SideMenu menuItems={SideMenuDataStudent}/>    
        <Outlet/>
      </div>

    </>
  );
}

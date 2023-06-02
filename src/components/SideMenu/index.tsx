import { SVGProps, useState } from "react";
import MenuItem from "./components/MenuItem";
import { Seta } from "../../iconComponents";

import Menu from "./components/Menu";

type Props = {
  menuItems: Array<{
    title: string;
    Icon: React.FC<SVGProps<SVGSVGElement>>;
    link: string;
  }>;
};

export function SideMenu({ menuItems }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <main className="z-10 fixed md:static min-h-screen flex flex-row w-fit">
      <div
        className={`bg-secundaryDark  flex flex-col overflow-auto overflow-x-hidden scrollb justify-center duration-300  ${
          open ? "w-60 md:w-72" : "w-0 md:w-12"
        }`}
      >
        <Menu open={open}>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              Icon={item.Icon}
              title={item.title}
              link={item.link}
              open={open}
              mlClosed="ml-0"
              mlOpened="ml-4"
            />
          ))}
        </Menu>
      </div>

      <div
        className="w-6 flex flex-col justify-center bg-gradient-to-r from-gray-400/50 to-gray-100/10 hover:cursor-pointer hover:from-gray-400/70"
        onClick={() => setOpen(!open)}
      >
        <Seta className={`${!open ? "rotate-180" : "rotate-0"} `} />

      </div>
    </main>
  );
}
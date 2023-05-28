import { Link as LinkItem } from "react-router-dom";
import IconeSite from "../../../iconComponents/General/IconeSite";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

export function Nav() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav
        className="
        max-w-[1240px]
        mx-auto
        h-24 
        flex 
        flex-row
        items-center 
        justify-between
        gap-5
        "
      >
        <div className="w-full ml-4">
          <IconeSite className="text-white w-16 h-16" />
        </div>

        <ul className="hidden md:flex flex-row gap-4 font-roboto font-bold text-lg text-white mr-2">

          <LinkItem to={"#"} className="link-default rounded-md">
            Tecnologias
          </LinkItem>

          <LinkItem to={"#"} className="link-default rounded-md">
            Contato
          </LinkItem>

          <LinkItem to={"#"} className="link-default rounded-md">
            Sobre
          </LinkItem>

          <LinkItem to={"signin"} className="link-default rounded-md">
            Login
          </LinkItem>

        </ul>

        <div
          className={`md:hidden hover:cursor-pointer text-white mr-4 ${
            open && "fixed right-0 z-10"
          }`}
          onClick={handleOpen}
        >
          {!open ? <IoMenu size={40} /> : <IoClose size={40} />}
        </div>

        {/* MOBILE */}
        <div
          className={`fixed z-10 md:hidden overflow-y-auto ${
            open
              ? "left-0 top-0 w-[60%] h-full drop-shadow-lg bg-zinc-800 ease-in-out duration-500"
              : "fixed left-[-100%]"
          } `}
        >
          <div className="mt-4 flex flex-col">
            <div className="ml-1">
              <IconeSite className="text-white w-24 h-24 drop-shadow-xl" />
            </div>

            <ul className="pt-10 w-full uppercase divide-y text-white font-bold font-roboto divide-gray-400 flex flex-col">
              
              <LinkItem to={"signin"} className="link p-4">
                Login
              </LinkItem>

              <LinkItem to={"#"} className="link p-4">
                Tecnologias
              </LinkItem>

              <LinkItem to={"#"} className="link p-4">
                Contato
              </LinkItem>

              <LinkItem to={"#"} className="link p-4">
                Sobre
              </LinkItem>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

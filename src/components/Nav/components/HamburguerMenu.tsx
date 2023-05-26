/* eslint-disable no-constant-condition */
import { IoClose, IoMenu } from "react-icons/io5";
import { NavMobileLinkList } from "./index";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
};

export function HamburgerMenu({ children }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden flex">
      <button onClick={() => setOpen(!open)}>
        {open ? <IoClose size={40} color={"#FFFFFF"} /> :  <IoMenu size={40} color={"#FFFFFF"} /> }
      </button>

      {/* hamburger itmes */}
      {open && (
        <div
          className="
            w-full
            h-[calc(100vh-5.0625rem)]
            transition-all ease-in
            fixed
            top-20
            left-0
            bg-white 
          "
        >
          <NavMobileLinkList>{children}</NavMobileLinkList>
        </div>
      )}
    </div>
  );
}

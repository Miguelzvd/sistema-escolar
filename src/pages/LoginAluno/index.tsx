/* eslint-disable quotes */
import { useState } from "react";
import seta from "../../assets/Global/seta.svg";
import { Boletim } from "./components/Boletim";

export function LoginAluno() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="flex">
        <div
          className={`bg-primaryDark min-h-screen flex justify-center p-5 ${
            open ? "w-72" : "w-14"
          } duration-200`}
        >
          Side menu
        </div>
        <div className="w-6 hover:cursor-pointer flex items-center" onClick={() => setOpen(!open)}>
          <img
            className={`${!open && "-rotate-180"} duration-200`}
            src={seta}
            alt="logo"
          />
        </div>
        <Boletim/>
      </div>
    </>
  );
}

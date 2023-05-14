import React from "react";

type Props = {
  text: string;
  name: string;
  id?: string;
  children?: React.ReactNode;
};

export function CustomSelect({ text, name, children, id = "default"}: Props) {
  return (
    <>
      <label className="w-full block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-gray-700 font-medium ">
          {text}
        </span>
      <select
        name={ name }
        id= { id }
        placeholder="Tipo"
        className="
        mt-1
        px-3
        py-3
        bg-gray
        border
        shadow-sm
        border-slate-300
        placeholder-slate-400
        focus:outline-none
        focus:border-sky-500
        focus:ring-sky-500 block
        w-full
        rounded-md
        sm:text-sm
        focus:ring-1
        drop-shadow-md
        hover:cursor-pointer"
      >
        <option selected className="text-slate-400 hover:cursor-pointer" value="">
          Escolha o tipo de usuario
        </option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
        {children}
      </select>
      </label>
    </>
  );
}

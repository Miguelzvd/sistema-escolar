import { ChangeEvent } from "react";


type Props = {
  text: string;
  name: string;
  id?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  htmlFor?: string | undefined;
  children?: React.ReactNode;
};

export function CustomSelect({ text, name, htmlFor, children, onChange}: Props) {
  return (
    <>
        <div className="w-full">
      <label htmlFor={htmlFor} className="w-full">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-gray-700 font-medium ">
          {text}
        </span>
      </label>
        <select
          required
          onChange = {onChange}
          name={name}
          className="
          mt-1
          p-3
          w-full
          bg-gray-100
          border
          shadow-sm
          border-slate-300
          placeholder-slate-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-sky-500
          rounded-md
          text-sm
          focus:ring-1
          drop-shadow-md
          hover:bg-slate-200
          hover:cursor-pointer"
        >
          <option className="text-slate-400" value="">
            Escolha o tipo de usuário
          </option>
          {children}
        </select>
      
      </div>
    </>
  );
}

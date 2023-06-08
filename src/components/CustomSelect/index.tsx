/* eslint-disable @typescript-eslint/no-explicit-any */
import {  UseFormRegister } from "react-hook-form";

type Props = {
  text: string;
  id: string;
  name: "userType";
  htmlFor: string;
  children: React.ReactNode;
  register: UseFormRegister<any>;
};

export function CustomSelect({
  text,
  htmlFor,
  children,
  register,
  name,
}: Props) {
  return (
    <div className="w-full">
      <label htmlFor={htmlFor} className="w-full">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-gray-700 font-medium ">
          {text}
        </span>
      </label>
      <select className="select" {...register(name)}>
        <option className="text-slate-400" value="">
          Escolha o tipo de usuário
        </option>
        {children}
      </select>
    </div>
  );
}

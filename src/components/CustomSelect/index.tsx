/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister } from "react-hook-form";

type Props = {
  text: string;
  name: string;
  children: React.ReactNode;
  register: UseFormRegister<any>;
};

export function CustomSelect({ text, children, name, register }: Props) {
  return (
    <div className="w-full">
      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-gray-700 font-medium ">
        <label htmlFor={name} className="w-full" />
        {text}
      </span>
      <select className="select" {...register(name)} id={name}>
        {children}
      </select>
    </div>
  );
}

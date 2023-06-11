/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister } from "react-hook-form";

type Props = {
  text: string;
  name: string;
  children: React.ReactNode;
  register: UseFormRegister<any>;
  errorFocus?: string;
  required?: boolean;
};

export function CustomSelect({ text, children, name, errorFocus, required = true, register }: Props) {
  return (
    <div className="w-full">
      
      <span>
        <label htmlFor={name} className="w-full" />
        {text}
        <span className={`${required ? "after:content-['*'] after:ml-0.5 after:text-red-500  text-gray-700 font-medium" : "hidden"} `}/>
      </span>

      <select 
        className={`select ${errorFocus ? "focus:border-red-500 focus:ring-red-500" : "focus:border-sky-500 focus:ring-sky-500"}`}
        {...register(name)} id={name}>
        {children}
      </select>
    </div>
  );
}

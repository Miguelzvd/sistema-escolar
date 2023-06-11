/* eslint-disable @typescript-eslint/no-explicit-any */
import {  ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";

type Props = {
  text: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputType: string;
  required?: boolean;
  placeHolder?: string;
  children?: ReactNode;
  register: UseFormRegister<any>;
  maxLength?: number | undefined;
  errorFocus?: string | undefined;
};

export function CustomInput({
  text,
  name,
  inputType = "text",
  required = true,
  placeHolder,
  children,
  maxLength,
  errorFocus = "",
  register,
}: Props) {
  return (
    <div className="w-full">
      <span>
        <label htmlFor={name} className="w-full" />
        {text}
        <span className={`${required ? "after:content-['*'] after:ml-0.5 after:text-red-500  text-gray-700 font-medium" : "hidden"} `}/>
      </span>
      
      <input
        {...register(name)}
        type={inputType}
        placeholder={placeHolder}
        id={name}
        className={`input ${errorFocus ? "focus:border-red-500 focus:ring-red-500" : "focus:border-sky-500 focus:ring-sky-500"}`}
        maxLength={maxLength}
      />
      {children}
    </div>
  );
}

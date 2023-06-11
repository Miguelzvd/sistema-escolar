/* eslint-disable @typescript-eslint/no-explicit-any */
import {  ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";

type Props = {
  text: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputType: string;
  placeHolder?: string;
  children?: ReactNode;
  register: UseFormRegister<any>;
  maxLength?: any;
};

export function CustomInput({
  text,
  name,
  inputType = "text",
  placeHolder,
  children,
  maxLength,
  register,
}: Props) {
  return (
    <div className="w-full">
      <span className="after:content-['*'] after:ml-0.5 after:text-red-500  text-gray-700 font-medium ">
        <label htmlFor={name} className="w-full" />
        {text}
      </span>
      
      <input
        {...register(name)}
        type={inputType}
        placeholder={placeHolder}
        id={name}
        className="input"
        maxLength={maxLength}
      />
      {children}
    </div>
  );
}

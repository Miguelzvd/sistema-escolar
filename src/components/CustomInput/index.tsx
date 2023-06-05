import { ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";

type FormValues = {
  userType: string;
  cpf: string;
  password: string;
};

type Props = {
  text: string;
  name:  "cpf" | "password";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputType: "text" | "number" | "email" | "password";
  placeHolder: string;
  htmlFor: string;
  id: string;
  children?: ReactNode;
  register: UseFormRegister<FormValues>;
  maxLength?: number;
};

export function CustomInput({
  text,
  name,
  value,
  inputType = "text",
  placeHolder,
  htmlFor,
  id,
  children,
  maxLength,
  register
}: Props) {
  return (
    <div className="w-full">
      <label htmlFor={htmlFor} className="w-full">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500  text-gray-700 font-medium ">
          {text}
        </span>
      </label>
      <input
        {...register(name)}
        value={value}
        type={inputType}
        placeholder={placeHolder}
        id={id}
        className="input"
        maxLength={maxLength}
      />
      { children }
    </div>
  );
}

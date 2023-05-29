import React from "react";

type Props = {
  text: string;
  name: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputType: "text" | "number" | "email" | "password";
  placeHolder?: string;
  htmlFor?: string | undefined;
  id?: string;
};

export function CustomInput({
  text,
  name,
  value,
  onChange,
  inputType = "text",
  placeHolder,
  htmlFor,
  id
}: Props) {
  return (
    <div className="w-full">
      <label htmlFor={htmlFor} className="w-full">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500  text-gray-700 font-medium ">
          {text}
        </span>
      </label>
      <input
        onChange={onChange}
        value={value}
        type={inputType}
        name={name}
        placeholder={placeHolder}
        id={id}
        className="
            mt-1
            p-3
            w-full
            bg-gray-100
            border
            shadow-sm
            drop-shadow-md
            rounded-md
            border-slate-300
            placeholder-slate-400
            focus:outline-none
            focus:border-sky-500
            focus:ring-sky-500
            text-sm
            focus:ring-1
            hover:bg-slate-200
            "
      />
    </div>
  );
}

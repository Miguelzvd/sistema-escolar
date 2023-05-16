import React from 'react';

type Props = {
  text: string;
  name: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputType: "text" | "number" | "email" | "password";
  placeHolder?: string;
}

export function CustomInput({ text, name, value, onChange, inputType = "text", placeHolder }: Props) {
  return (
    <div className="w-full">
      <label className="w-full">
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
          className="
            mt-1
            px-3
            py-3
            bg-gray-100
            border
            shadow-sm
            border-slate-300
            placeholder-slate-400
            focus:outline-none
            focus:border-sky-500
            focus:ring-sky-500
            w-full
            rounded-md
            text-sm
            focus:ring-1
            drop-shadow-md
            hover:bg-slate-100
            "
        />
    </div>
  );
}

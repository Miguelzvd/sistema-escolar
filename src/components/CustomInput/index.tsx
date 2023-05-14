type Props = {
  text: string;
  name: string;
  inputType?: string;
  placeHolder?: string;
}

export function CustomInput({ text, name, inputType = "text", placeHolder }: Props) {
  return (
    <>
      <label className="w-full block">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-gray-700 font-medium ">
          {text}
        </span>
        
        <input
          type={ inputType }
          name={ name }
          placeholder={placeHolder}
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
            text-sm
            focus:ring-1
            drop-shadow-md
            "
        />
      </label>
    </>
  );
}

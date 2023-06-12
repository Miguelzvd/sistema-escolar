import { IoSearch } from "react-icons/io5";

type Props = {
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputType: string;
  placeHolder?: string;
  maxLength?: number | undefined;
  search?: boolean;
};

export function CustomInput({
  name,
  value,
  inputType = "text",
  placeHolder,
  maxLength,
  search = false,
  onChange,
}: Props) {
  return (
    <div className="w-full ">
      <label htmlFor={name} className="w-full" />
      <div className="relative">
        {search && (
          <div className="text-gray-700 absolute inset-y-0 right-3 z-10 flex items-center pointer-events-none">
            <IoSearch className="h-[1.35rem] w-[1.35rem]" />
          </div>
        )}
        <input
          onChange={onChange}
          type={inputType}
          placeholder={placeHolder}
          id={name}
          value={value}
          className="inputSearch focus:border-sky-500 focus:ring-sky-500 text-black"
          maxLength={maxLength}
        />
      </div>
    </div>
  );
}

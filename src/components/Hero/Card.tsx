type Props = {
  children: React.ReactNode;
  text: string;
  title: string;
}

export function Card({ children, text, title }: Props) {
  return (
    <div className="w-full sm:w-fit h-fit p-4 bg-[#353536] rounded-lg shadow-2xl hover:shadow-sky-600 cursor-default">
      <div className="w-[90%] flex flex-col text-justify gap-4">
        {/* Logo and title */}
        <div className="flex flex-col text-justify gap-2 text-xl font-bold text-white">
          <div className="bg-[#252529] w-fit p-2 rounded-md">
            { children }
          </div>
          <h1>{ title }</h1>
        </div>
        <p className="font-roboto text-gray-300">
          { text }
        </p>
      </div>
    </div>
  );
}

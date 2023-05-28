import { SVGProps } from "react";

type Props = {
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  text: string;
  title: string;
  Shadowcolor: string;
};

export function Card({ Icon, text, title, Shadowcolor }: Props) {
  return (
    <div className="relative w-full  md:w-fit h-70 select-none">
      <div className={`absolute inset-1 h-[98%] md:w-[98%] m-auto blur-md animate-pulse opacity-5 ${Shadowcolor}`}/>
      {/* CARD */}
      <div
        className={"relative h-full p-4 bg-[#353536] rounded-lg shadow-2xl cursor-default duration-300"}
      >
        <div className="flex flex-col text-justify gap-4">
          {/* Logo and title */}
          <div className="flex flex-col text-justify gap-2 text-xl font-bold text-white">
            <div className="bg-[#252529] w-fit p-2 rounded-md">
              <Icon width={25} height={25} />
            </div>
            <h1>{title}</h1>
          </div>

          <p className="font-roboto text-gray-300">{text}</p>
        </div>
      </div>
    </div>
  );
}

type Props = {
  children: React.ReactNode;
  title: string;
  padding?: string;
};

export function Card({ children, title, padding="py-8" }: Props) {
  return (
    <div className="min-h-screen flex flex-row items-center m-auto">
      <div
        className={` 
        bg-slate-200 
        w-[36rem]
        md:w-[52rem]
        xl:w-[64rem]
        lg:w-[68rem]
        2xl:w-[70rem]
        h-fit
        m-5
        md:mx-5
        gap-4
        ${padding}        
        mx-2
        flex flex-col
        items-center
        border 
        rounded-md 
        border-slate-300
        shadow-sm drop-shadow-md
        duration-300
        `}
      >
        <header>
          <h1 className="text-secundary font-roboto font-bold text-3xl">{ title }</h1>
        </header>

        {children}
      </div>
    </div>
  );
}

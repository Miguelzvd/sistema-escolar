type Props = {
  children: React.ReactNode;
  title: string;
};

export function Card({ children, title }: Props) {
  return (
    <div className="min-h-screen flex flex-row items-center m-auto">
      <div
        className=" 
      bg-slate-200 
        w-128 
        h-fit
        gap-4
        md:w-[80rem]
        py-8
        mx-2
        flex flex-col
        items-center
        border 
        rounded-md 
        border-slate-300
        shadow-sm drop-shadow-md
        "
      >
        <header>
          <h1 className="text-secundary font-roboto font-bold text-3xl">{ title }</h1>
        </header>

        {children}
      </div>
    </div>
  );
}

import { CostumLink } from "..";

type Props = {
  children: React.ReactNode;
  variant?: "default" | "hover"; 
  text?:string;
  link:string;
  textColor:string;
};

export function NavMobileLink({ children, variant, text, link, textColor }: Props) {
  return (
    <>
      <CostumLink variant={ variant } text={ text } link={ link } textColor={ textColor }>
        <li className="w-full p-4 border-b border-gray-100 text-xl font-bold">
          {children}
        </li>
      </CostumLink>
    </>
  );
}

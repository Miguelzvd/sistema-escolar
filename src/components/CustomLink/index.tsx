import { Link as LinkItem } from "react-router-dom";
import classnames from "classnames";

type Props = {
  variant?: "default" | "hover";
  link: string;
  text?: string;
  textColor?: string;
  children?: React.ReactNode;
};

export function CustomLink({
  variant,
  text,
  link,
  textColor = "text-white",
  children,
}: Props) {
  let hover = "";
  if (variant === "hover") {
    hover = "hover:bg-gray-100 hover:text-slate-900 active:bg-gray-200";
  }
  return (
    <>
      <LinkItem
        to={link}
        className={`
           font-bold
           px-3 py-2
           text-xl
           ${classnames(hover)}
           ${textColor}
           rounded-lg
           duration-200
           ring-1 ring-blue-500
           shadow-sm
           drop-shadow-md
          `}
      >
        {text}
        {children}
      </LinkItem>
    </>
  );
}

import { Link as LinkItem } from "react-router-dom";
import classnames from "classnames";

type Props = {
  variant?: "default" | "hover";
  link: string;
  text?: string;
  py?: string;
  textColor?: string;
  roundend?: string;
  children?: React.ReactNode;
};

export function CustomLink({
  variant,
  text,
  link,
  roundend,
  py = "py-2",
  textColor = "white",
  children,
}: Props) {
  let hover = "";
  if (variant === "hover") {
    hover = "hover:bg-gray-100 hover:text-slate-900 active:bg-gray-200";
  }
  return (
    <LinkItem
      to={link}
      className={`
           font-bold
           px-3
           ${py}
           text-xl
           ${classnames(hover)}
           text-${textColor}
           ${roundend}
           duration-200
           shadow-sm
           drop-shadow-md
          `}
    >
      {text}
      {children}
    </LinkItem>
  );
}

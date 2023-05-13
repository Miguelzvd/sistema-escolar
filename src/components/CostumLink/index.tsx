import { Link as LinkItem } from "react-router-dom";
import classnames from "classnames";

type Props = {
  variant?: "default" | "hover";
  link: string;
  text?: string;
  textColor?: string;
  children?: React.ReactNode;
};

export function CostumLink({variant, text, link, textColor = "text-white", children}: Props) {
  let hoverBg = "";
  let hoverTxt = "";
  if(variant === "hover" ){
    hoverBg = "hover:bg-slate-100";
    hoverTxt = "hover:text-slate-900";
  }
  return (
    <>
      <LinkItem
        to={link}
        className={`
           font-bold
           px-3 py-2
           text-xl
           ${classnames(hoverBg, hoverTxt)}
           ${textColor}
           rounded-lg
           duration-200
          `}
      >
        {text}
        {children}
      </LinkItem>
    </>
  );
}

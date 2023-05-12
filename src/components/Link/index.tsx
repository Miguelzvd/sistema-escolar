import { Link as LinkItem } from "react-router-dom";

interface linkProps {
  link: string;
  text: string;
}

export function Link({ text, link }: linkProps) {
  return (
    <>
        <LinkItem
          to={link}
          className="
           font-bold
           px-3 py-2
           text-l
           text-white
           hover:bg-slate-100
           hover:text-slate-900
           rounded-lg
           duration-200
           "
        >
          {text}
        </LinkItem>
    </>
  );
}

import { Link as LinkItem } from "react-router-dom";

interface linkProps {
  link: string;
  text: string;
}

export function Link({ text, link }: linkProps) {
  return (
    <>
      <div className="mx-8">
        <LinkItem
          to={link}
          className="
           font-bold
           px-3 py-2
           text-l
           text-white
           rounded-lg
           hover:bg-slate-100
           hover:text-slate-900
           duration-200
           "
        >
          {text}
        </LinkItem>
      </div>
    </>
  );
}

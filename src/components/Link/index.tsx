import { Link as LinkItem } from "react-router-dom";

type Props = {
  link: string;
  text: string;
  textColor?: string;
}

export function Link({ text, link, textColor="text-white" }: Props) {
  return (
    <>
      <LinkItem
        to={link}
        className={`
          font-bold
           px-3 py-2
           text-xl
           ${ textColor }
           hover:bg-slate-100
           hover:text-slate-900
           rounded-lg
           duration-200
          `}
      >
        {text}
      </LinkItem>
    </>
  );
}

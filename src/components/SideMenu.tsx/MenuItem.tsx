import { SVGProps } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  title: string;
  mlClosed?: string;
  mlOpened?: string;
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  open: boolean;
  link:string;
};

export default function MenuItem({
  title,
  Icon,
  mlOpened = "ml-0",
  mlClosed = "ml-0",
  open,
  link
}: Props) {
  return (
    <NavLink to={link}>
      <li
        className={`hover:bg-white/25 hover:cursor-pointer hover:text-secundary duration-150 h-10 flex items-center gap-4 font-bold text-white ${
          !open ? "justify-center" : ""
        }`}
      >
        <Icon
          className={`${!open ? mlClosed : mlOpened}`}
          width="1.5rem"
          height="1.5rem"
        />
        <span className={!open ? "hidden" : "inline overflow-x-hidden-hidden"}>
          {title}
        </span>
      </li>
    </NavLink>
  );
}

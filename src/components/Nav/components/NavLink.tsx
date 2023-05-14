import { CostumLink } from "../..";

interface Props {
  text: string;
  link: string;
  variant?: "default" | "hover";
}

export function NavLink({ text, link, variant }: Props) {
  return (
    <>
      <li className="my-6 md:my-0">
        <CostumLink text={text} link={link} variant={variant} />
      </li>
    </>
  );
}

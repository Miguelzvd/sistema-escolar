import { CustomLink } from "../../CustomLink";

interface Props {
  text: string;
  link: string;
  variant?: "default" | "hover";
}

export function NavLink({ text, link, variant }: Props) {
  return (
    <>
      <li>
        <CustomLink text={text} link={link} variant={variant} />
      </li>
    </>
  );
}

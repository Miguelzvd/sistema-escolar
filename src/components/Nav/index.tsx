/* eslint-disable no-constant-condition */
import {
  HamburgerMenu,
  NavLinkList,
} from "./components";
import IconeSite from "../../iconComponents/General/IconeSite";
import { CustomLink } from "..";

export function Nav() {
  return (
    <>
      <nav
        className="
      bg-primary
        px-5
        w-full 
        h-20 flex 
        border-b 
        border-gray-200 
        items-center 
        justify-between
        duration-200
        "
      >
        <IconeSite className="text-white ml-4 w-16 h-16" />

        <NavLinkList>
          <CustomLink text="Private" link="/private" variant="hover" roundend="rounded-lg" />
          <CustomLink text="Home" link="/" variant="hover" roundend="rounded-lg" />
          <CustomLink text="Login" link="/sign-up" variant="hover" roundend="rounded-lg" />
        </NavLinkList>

        <HamburgerMenu>
          <CustomLink text="Private" link="/private" textColor="black" variant="hover" py="py-4" />
          <CustomLink text="Home" textColor="black" link="/" variant="hover" py="py-4" />
          <CustomLink text="Login" link="/sign-up" textColor="black" variant="hover" py="py-4" />
        </HamburgerMenu>

      </nav>
    </>
  );
}

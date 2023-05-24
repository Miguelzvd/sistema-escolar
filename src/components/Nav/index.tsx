/* eslint-disable no-constant-condition */
import {
  NavMobileLink,
  NavLink,
  NavLinkList,
  HamburgerMenu,
} from "./components/index";
import IconeSite from "../../iconComponents/General/IconeSite";

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
        "
      >
        <IconeSite className="text-white ml-4 w-16 h-16" />

        <NavLinkList>
          <NavLink text="Private" link="/private" variant="hover" />
          <NavLink text="Home" link="/" variant="hover" />
          <NavLink text="Login" link="/sign-up" variant="hover" />
        </NavLinkList>

        <HamburgerMenu>
          <NavMobileLink to="/sign-up-teacher">Níveis de ensino</NavMobileLink>

          <NavMobileLink to="/sign-up-student">Sistema</NavMobileLink>

          <NavMobileLink to="/sign-up">Login</NavMobileLink>
        </HamburgerMenu>
      </nav>
    </>
  );
}

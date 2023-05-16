/* eslint-disable no-constant-condition */
import { NavMobileLink, NavLink, NavLinkList, HamburgerMenu } from "./index";

import logo from "../../assets/icone.svg";

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
        <img className="inline ml-4" src={logo} alt="Logo da escola" />

        <NavLinkList>
          <NavLink text="Níveis de ensino" link="/private" variant="hover" />
          <NavLink text="Sistema" link="/" variant="hover" />
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

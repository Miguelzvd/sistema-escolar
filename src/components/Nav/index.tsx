import { CostumLink } from "../CostumLink";
import logo from "../../assets/icone.svg";
import { NavMobileItem } from "./NavMobileItem";
import { NavLinks } from "./NavLinks";
import { HamburgerMenu } from "./HamburguerMenu";

export function Nav() {
  return (
    <>
      <nav
        className="
      bg-primary
        px-5
        w-full 
        h-20 flex border-b 
        border-gray-200 
        items-center 
        justify-between
        "
      >
        <img className="inline ml-4" src={logo} alt="Logo da escola" />

        <ul
          className=" 
          hidden
          lg:flex 
          md:items-center
          gap-10
          "
        >
          <li className="my-6 md:my-0">
            <CostumLink text="Níveis de ensino" link="#" />
          </li>

          <li className="my-6 md:my-0">
            <CostumLink text="Sistema" link="#" />
          </li>

          <li className="my-6 md:my-0">
            <CostumLink text="Login" link="sign-up" />
          </li>
        </ul>
        <HamburgerMenu/>
        
      </nav>

      {/* hamburger itmes */}
      <div
        className="
        w-full
        h-[calc(100vh-5.0625rem)]
        fixed
        top-20
        left-0
       bg-white border-2
       "
      >
        <NavLinks>
          <CostumLink link="sign-up-copy" textColor="text-black" variant="hover">
            <NavMobileItem>Níveis de ensino</NavMobileItem>
          </CostumLink>

          <CostumLink link="#" textColor="text-black" variant="hover">
            <NavMobileItem>Sistema</NavMobileItem>
          </CostumLink>

          <CostumLink link="/sign-up" textColor="text-black" variant="hover">
            <NavMobileItem>Login</NavMobileItem>
          </CostumLink>
        </NavLinks>
      </div>
    </>
  );
}

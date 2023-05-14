/* eslint-disable no-constant-condition */
import { GiHamburgerMenu } from "react-icons/Gi";
import { NavMobileLink, NavMobileLinkList, NavLink} from "./index";
import { useNavMobileContext } from "../../contexts";
import logo from "../../assets/icone.svg";

export function Nav() {
  const { isVisible, setIsVisible } = useNavMobileContext();

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
          <NavLink text = "Níveis de ensino" link = "#" variant = "hover"/>
          <NavLink text = "Sistema" link = "#" variant = "hover"/>
          <NavLink text = "Login" link = "sign-up" variant = "hover"/>
        </ul>

        <div className="lg:hidden flex">
          <button onClick={() => setIsVisible((prev) => !prev)}>
            {isVisible ? (
              <span className="font-bold text-3xl text-white">X</span>
            ) : (
              <GiHamburgerMenu size={40} color={"#FFFFFF"} />
            )}
          </button>
        </div>
        {/* hamburger itmes */}
        {isVisible && (
          <div
            className="
            w-full
            h-[calc(100vh-5.0625rem)]
            fixed
            top-20
            left-0
            bg-white 
          "
          >
            <NavMobileLinkList>
              <NavMobileLink
                to="/sign-up-teacher"
              >
                Níveis de ensino
              </NavMobileLink>

              <NavMobileLink 
                to="/sign-up-student" 
              >
                Sistema
              </NavMobileLink>

              <NavMobileLink
                to="/sign-up"
              >
                Login
              </NavMobileLink>

            </NavMobileLinkList>
          </div>
        )}
      </nav>
    </>
  );
}

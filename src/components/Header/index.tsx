import { Link } from "../Link";
import logo from "../../assets/icone.svg";

export function Header() {
  return (
    <>
      <nav className="bg-primary p-5 shadow md:flex md:items-center md:justify-between">
        <img className="inline ml-4" src={logo} alt="Logo da escola" />

        <ul className=" 
        md:flex 
        md:items-center
        
        ">
          <li className="my-6 md:my-0">
            <Link text="Níveis de ensino" link="#"></Link>
          </li>

          <li className="my-6 md:my-0">
            <Link text="Sistema" link="#"></Link>
          </li>

          <li className="my-6 md:my-0"> 
            <Link text="Login" link="sign-up"></Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

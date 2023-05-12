import { Link } from "../Link";
import logo from "../../assets/icone.svg";
import "./style.css";

export function Header() {
  return (
    <>
      <nav className="bg-blue p-3 md:flex md:items-center md:justify-between">
        <img className="inline mx-4" src={logo} alt="Logo da escola" />
          <ul className="md:flex md:items-center">
            <Link text="Níveis de ensino" link="#"></Link>
            <Link text="Sistema" link="#"></Link>
            <Link text="Login" link="sign-up"></Link>
          </ul>
      </nav>
    </>
  );
}

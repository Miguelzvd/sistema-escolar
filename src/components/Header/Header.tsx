import { Link } from "../Link/Link";
import logo from "../../assets/icone.svg";
import style from "./style.module.css";

export function Header() {
  return (
    <>
      <div className={style.container}>
        <img src={logo} alt="" />
        <nav className={style.nav}>
          <Link link="Níveis de ensino"></Link>
          <Link link="Sistema"></Link>
          <Link link="Login"></Link>
        </nav>
      </div>
    </>
  );
}

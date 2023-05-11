import { Link } from '../Link';
import logo from '../../assets/icone.svg';
import style from './style.module.css';

export function Header() {
  return (
    <>
      <div className={style.container}>
        <img src={logo} alt="Logo da escola"/>
        <nav className={style.nav}>
          <Link text="Níveis de ensino" link="#"></Link>
          <Link text="Sistema" link="#"></Link>
          <Link text="Login" link="sign-up"></Link>
        </nav>
      </div>
    </>
  );
}
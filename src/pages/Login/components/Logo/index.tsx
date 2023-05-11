import logo from "../../../../assets/logo-login.svg"
import style from "./style.module.css";


export function Logo() {
  return (
    <>
      <div className={style.container}>
        <img src={logo} alt="logo" />
      </div>
    </>
  );
}

import logo from "../../../../assets/logo-login.svg"
import './style.css'


export function Logo() {
  return (
    <>
      <div className="tam">
        <img className="w-full h-full" src={logo} alt="logo" />
      </div>
    </>
  );
}

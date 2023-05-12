import Form from "./components/Form";
import { Logo } from "./components/Logo";
import style from "./style.module.css";

export function LoginCopy() {
  return (
    <>
      
        <div className="flex flex-row">
          <Logo />
          <Form />
      </div>
    </>
  );
}

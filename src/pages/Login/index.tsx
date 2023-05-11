import Form from "./components/Form";
import { Logo } from "./components/Logo";
import style from "./style.module.css"

export function Login() {
  return (
    <>
        <div className = {style.container}>
          <Logo />
          <Form />
        </div>
    </>
  );
}

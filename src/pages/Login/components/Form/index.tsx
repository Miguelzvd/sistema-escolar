import { Input } from "../../../../components/Inputs";
import style from "./style.module.css";

export default function Form() {
  return (
    <>
      <div className={style.container}>
        <form className={style.form} action="">
          <Input
            text="Tipo de usuário"
            htmlForText="tipo-usuário"
            inputType="text"
          />

          <Input
            text="CPF"
            htmlForText="tipo-usuário"
            inputType="text"
          />

          <Input
            text="Senha"
            htmlForText="tipo-usuário"
            inputType="password"
          />

          <button className={style.button}>Entrar</button>

        </form>
      </div>
    </>
  );
}

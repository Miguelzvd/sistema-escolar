import { Input } from "../../../../components/Inputs";
import style from "./style.module.css";

export default function Form() {
  return (
    <>
      <div className={style.desktop}>
        <div className="logo">Logo</div>

        <form className={style.form} action="">
          <Input
            text="Tipo de usuário"
            htmlForText="tipo-usuário"
            inputType="text"
          />

          <Input
            text="Tipo de usuário"
            htmlForText="tipo-usuário"
            inputType="text"
          />

          <Input
            text="Tipo de usuário"
            htmlForText="tipo-usuário"
            inputType="text"
          />

          <div>
            <button></button>
          </div>
        </form>
      </div>
    </>
  );
}

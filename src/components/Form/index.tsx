import style from "./style.module.css";

export default function Form() {
  return (
    <>
      <div className={style.desktop}>
        <div className="logo">Logo</div>

        <form className={style.form} action="">

          <div>
            <label htmlFor="tipo-usuário">Tipo de usuário</label>
            <input type="text"/>
          </div>
          <div>
            <label htmlFor="tipo-usuário">Tipo de usuário</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="tipo-usuário">Tipo de usuário</label>
            <input type="text" />
          </div>
          <div>
            <button className={style.b}>Entrar</button>
          </div>
        </form>
      </div>
    </>
  );
}

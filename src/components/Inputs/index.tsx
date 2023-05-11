import style from "./style.module.css";

interface inputProps{
    text:string;
    htmlForText:string;
    inputType:string;
}

export function Input({text, htmlForText, inputType}: inputProps) {
  return (
    <>
      <div className={style.container}>
        <label htmlFor={ htmlForText }>{ text }</label>
        <input className={style['input-style']} type={ inputType } />
      </div>
    </>
  );
}

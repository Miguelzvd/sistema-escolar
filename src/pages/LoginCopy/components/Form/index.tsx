import { Input } from "../../../../components/Inputs";
import style from "./style.module.css";

export default function Form() {
  return (
    <>
      <div >
        <form className="bg" action="">

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-gray-700 font-medium text-slate-700"
            >
              Tipo de usuario
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <Input
            text="CPF"
            name="tipo-usuário"
            inputType="text"
            placeHolder="Digite seu CPF"
          />

          <Input
            text="Senha"
            name="tipo-usuário"
            inputType="password"
            placeHolder="Digite sua senha"
          />

          <button className="btn btn-blue">Entrar</button>
        </form>
      </div>
    </>
  );
}

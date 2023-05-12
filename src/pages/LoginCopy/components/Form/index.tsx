import { Input } from "../../../../components/Inputs";


export default function Form() {
  return (
    <>

        <form className="flex flex-col justify-center items-center h-full w-full bg-white px-4 gap-y-5 " action="">
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

          <button className="btn btn-blue w-full">Entrar</button>
        </form>

    </>
  );
}

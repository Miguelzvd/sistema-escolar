import { CustomInput, CustomSelect } from "../../../../components";



export default function Form() {
  return (
    <>
      <form
        className="flex flex-col justify-center items-center h-full w-full bg-white px-4 gap-y-8 "
        action=""
      >

        <CustomSelect name="user-type" text="Tipo de acesso">
        </CustomSelect>
        
        <CustomInput
          text="CPF"
          name="tipo-usuário"
          inputType="text"
          placeHolder="Digite seu CPF"
        />

        <CustomInput
          text="Senha"
          name="tipo-usuário"
          inputType="password"
          placeHolder="Digite sua senha"
        />

        <button className="drop-shadow-md border-b btn btn-blue w-full">
          Entrar
        </button>
      </form>
    </>
  );
}

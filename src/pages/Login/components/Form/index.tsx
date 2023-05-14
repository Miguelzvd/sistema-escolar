import { CustomInput, CustomSelect } from "../../../../components";



export default function Form() {
  return (
    <>
      <form
        className="
        flex 
        flex-col
        justify-center
        items-center
        h-full
        w-full
        bg-white
        lg:px-4
        md:p-10
        p-10
        gap-y-8 
        rounded-lg
        lg:rounded-none"
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

        <button className="drop-shadow-lg border-b border-black btn btn-blue w-full">
          Entrar
        </button>
      </form>
    </>
  );
}

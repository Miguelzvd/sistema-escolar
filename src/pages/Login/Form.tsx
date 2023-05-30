import { ChangeEvent, useState, useContext } from "react";
import { CustomInput, CustomSelect } from "../../components";
import { AuthContext } from "../../contexts";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

export default function Form() {
  
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [cpf, setcpf] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userType, setuserType] = useState<string>("");

  const handleUserType = (e: ChangeEvent<HTMLSelectElement>) => {
    setuserType(e.target.value);
  };

  const handleCPFInput = (e: ChangeEvent<HTMLInputElement>) => {
    setcpf(e.target.value);
  };

  const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    console.log("login esta sendo executado");
    if (cpf && password && userType) {
      const isLogged = await auth.signin(cpf, password, userType);
      if (isLogged) {
        navigate("/student");
        console.log(cpf, password, userType)
      } else {
        alert("Deu erro");
      }
    }
  };

  return (
    <>
      <form
        onSubmit={ handleLogin }
        className="
        w-80
        p-4
        rounded-md
        sm:w-[55%]
        md:rounded-none
        md:w-full
        md:h-full
        md:px-4
        flex 
        flex-col 
        justify-center
        gap-4
        lg:gap-6
        bg-white
        "
      >

        <CustomSelect onChange={handleUserType} htmlFor="user-type" name="user-type" text="Tipo de acesso">
          <option value={"student"}>Aluno</option>
          <option value={"teacher"}>Professor</option>
          <option value={"parent"}>Resposável</option>
        </CustomSelect>

        {/*CPF PARA TODOS OS CADASTROS*/}
        <CustomInput
          value={cpf}
          text="cpf"
          onChange={handleCPFInput}
          name="cpf"
          inputType="text"
          htmlFor="cpf"
          id="cpf"
          placeHolder="Digite seu CPF"
        />

        <CustomInput
          value={password}
          text="Senha"
          onChange={handlePasswordInput}
          name="password"
          inputType="password"
          htmlFor="password"
          id="password"
          placeHolder="Digite sua senha"
        />

        <Button text="Entrar" type="submit" />
      </form>
    </>
  );
}

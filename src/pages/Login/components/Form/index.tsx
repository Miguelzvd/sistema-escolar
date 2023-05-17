import { ChangeEvent, useState, useContext } from "react";
import { CustomInput, CustomSelect } from "../../../../components";
import { AuthContext } from "../../../../contexts";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [matricula, setMatricula] = useState("");
  const [password, setPassword] = useState("");

  const handleMatriculaInput = (e: ChangeEvent<HTMLInputElement>) => {
    setMatricula(e.target.value);
  };

  const handlePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    console.log("login esta sendo executado");
    if (matricula && password) {
      const isLogged = await auth.signin(matricula, password);
      if (isLogged) {
        navigate("/private");
      } else {
        alert("Deu erro");
      }
    }
  };

  return (
    <>
      <div
        className="
        flex 
        flex-col 
        gap-1 
        sm:gap-2
        
        "
      >
        <CustomSelect name="user-type" text="Tipo de acesso">
          <option value={"student"}>Aluno</option>
          <option value={"teacher"}>Professor</option>
          <option value={"parent"}>Resposável</option>
        </CustomSelect>

        {/*CPF PARA TODOS OS CADASTROS*/}
        <CustomInput
          value={matricula}
          text="Matricula"
          onChange={handleMatriculaInput}
          name="matricula"
          inputType="text"
          placeHolder="Digite sua senha"
        />

        <CustomInput
          value={password}
          text="Senha"
          onChange={handlePasswordInput}
          name="senha"
          inputType="password"
          placeHolder="Digite sua senha"
        />

        <button
          onClick={handleLogin}
          className=" 
          w-full
          sm:p-2
          drop-shadow-lg
          shadow-md
          bg-primaryLight
          rounded
          text-white
          font-semibold"
        >
          Entrar
        </button>
      </div>
    </>
  );
}

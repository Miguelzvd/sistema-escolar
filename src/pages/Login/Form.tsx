import { Button, CustomInput, CustomSelect } from "../../components/index";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"; //Biblioteca de validacao
import { cpfMask } from "../../utils/inputMasks";

export default function LoginForm() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  //Esquema/esqueleto do objeto usuario com a devidas validacoes
  const Loginschema = z.object({
    cpf: z
      .string()
      .nonempty("Campo obrigatório")
      .max(14, "O campo CPF não pode exceder 14 caracteres")
      .regex(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/, "CPF inválido"),

    password: z.string().nonempty("Campo obrigatório"),

    userType: z.string().nonempty("Campo obrigatório"),
  });

  type FormLoginValues = z.infer<typeof Loginschema>;

  const {
    register,
    handleSubmit, //Funcao de Login
    watch, //Observa o valor do input especificado
    setValue, //Altera o valor de input especificado
    formState: { errors },
  } = useForm<FormLoginValues>({
    defaultValues: {
      cpf: "",
      password: "",
      userType: "",
    },
    resolver: zodResolver(Loginschema),
  });

  const cpfValue = watch("cpf");

  useEffect(() => {
    setValue("cpf", cpfMask(cpfValue));
  }, [cpfValue, setValue]);

  const handleFormSubmit = async (data: FormLoginValues): Promise<void> => {
  const User = Loginschema.parse(data);

  if (User) {
    const isLogged = await auth.signin(
      User.cpf,
      User.password,
      User.userType
    );

    if (isLogged) {
      const userType = User.userType;

      if (["student", "teacher", "parent"].includes(userType)) {
        navigate(`/${userType}`);
      } else {
        alert("Tipo de usuário inexistente");
      }
    } else {
      alert("Algo deu errado");
    }
  }
};


  return (
    <>
      <form
        onSubmit={handleSubmit(handleFormSubmit)} // calling the handleFormSubmit function instead of directly accessing it
        className="form-login"
        name="loginForm"
      >
        <div>
          <CustomSelect
            id="userType"
            htmlFor="userType"
            text="Tipo de acesso"
            register={register}
            name="userType"
          >
            <option value={"student"}>Aluno</option>
            <option value={"teacher"}>Professor</option>
            <option value={"parent"}>Responsável</option>
          </CustomSelect>
          {errors.userType && (
            <span className="ml-2 text-red-600 text-sm">
              {errors.userType.message}
            </span>
          )}
        </div>

        <CustomInput
          text="CPF"
          inputType="text"
          htmlFor="cpf"
          id="cpf"
          placeHolder="Digite seu CPF"
          name="cpf"
          register={register}
          maxLength={14}
        >
          {errors.cpf && (
            <span className="ml-2 text-red-600 text-sm">
              {errors.cpf.message}
            </span>
          )}
        </CustomInput>

        <CustomInput
          text="Senha"
          inputType="password"
          htmlFor="password"
          id="password"
          placeHolder="Digite sua senha"
          name="password"
          register={register}
        >
          {errors.password && (
            <span className="ml-2 text-red-600 text-sm">
              {errors.password.message}
            </span>
          )}
        </CustomInput>

        <Button text="Entrar" type="submit" />
      </form>
    </>
  );
}

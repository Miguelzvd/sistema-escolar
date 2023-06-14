import { Button, CustomFormInput, CustomSelect } from "src/components/index";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "src/contexts";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"; //Biblioteca de validacao
import { cpfMask } from "src/utils/inputMasks";
import { validateCPF } from "src/utils/functions";
import { api } from "src/service/api";

export default function LoginForm() {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  //Esquema/esqueleto do objeto usuario com a devidas validacoes
  const Loginschema = z.object({
    cpf: z
      .string()
      .nonempty("Campo obrigatório")
      .min(14, "CPF inválido")
      .refine((cpf) => validateCPF(cpf), "CPF inválido")
      .transform((cpf: string) => {
        cpf = cpf.replace(".", "");
        cpf = cpf.replace(".", "");
        cpf = cpf.replace(/-/g, "");
        return cpf;
      }),

    password: z.string().nonempty("Campo obrigatório"),

    userType: z.string().nonempty("Campo obrigatório"),
  });

  type FormLoginValues = z.infer<typeof Loginschema>;

  const {
    register,
    handleSubmit, //Função de Login
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

  const cpfValue = watch("cpf"); //Observando o input CPF
  useEffect(() => {
    setValue("cpf", cpfMask(cpfValue)); //Alterando o valor do input CPF de acordo com a mascara criada
  }, [cpfValue, setValue]);

  const handleFormSubmit = async (data: FormLoginValues): Promise<void> => {
    const User = data
    // console.log(data);

    const response = await api.post("/login", data)
    console.log(response.data)
    if (User) {
      const isLogged = await auth.signin(
        User.cpf,
        User.password,
        User.userType
      );

      if (isLogged) {
        const userType = User.userType;

        if (["student", "teacher", "parent", "adm"].includes(userType)) {
          navigate(`/${userType}`);
        } else {
          alert("Tipo de usuário inexistente");
        }
      } else {
        alert("Ocorreu um erro ao fazer login");
      }
    }
    
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="form-login"
        name="loginForm"
      >
        <div>
          <CustomSelect
            text="Tipo de acesso"
            register={register}
            name="userType"
            errorFocus={errors.userType?.message}
          >
            <option className="text-slate-400" value="">
              Escolha o tipo de usuário
            </option>
            <option value={"student"}>Aluno</option>
            <option value={"parent"}>Responsável</option>
            <option value={"teacher"}>Professor</option>
            <option value={"adm"}>Administrador</option>
          </CustomSelect>
          {errors.userType && (
            <span className="ml-2 text-red-600 text-sm">
              {errors.userType.message}
            </span>
          )}
        </div>

        <CustomFormInput
          text="CPF"
          inputType="text"
          placeHolder="Digite seu CPF"
          name="cpf"
          register={register}
          maxLength={14}
          errorFocus={errors.cpf?.message}
        >
          {errors.cpf && (
            <span className="ml-2 text-red-600 text-sm">
              {errors.cpf.message}
            </span>
          )}
        </CustomFormInput>

        <CustomFormInput
          text="Senha"
          inputType="password"
          placeHolder="Digite sua senha"
          name="password"
          register={register}
          errorFocus={errors.password?.message}
        >
          {errors.password && (
            <span className="ml-2 text-red-600 text-sm">
              {errors.password.message}
            </span>
          )}
        </CustomFormInput>

        <Button text="Entrar" type="submit" />
      </form>
    </>
  );
}

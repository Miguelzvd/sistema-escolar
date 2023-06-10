import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Button,
  CustomInput,
  CustomSelect,
} from "../../../../../../components";
import { validateCPF } from "../../../../../../utils/functions";
import { Card } from "../../../../../../components";
import { useEffect } from "react";
import { cpfMask, rgMask } from "../../../../../../utils/inputMasks";

export function CadastroAluno() {
  const FormSchema = z.object({
    name: z
      .string()
      .nonempty("Campo obrigatório")
      .regex(/^[a-záàâãéèêíïóôõöúçñ ]+$/i, "Apenas letras"),

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

    rg: z
      .string()
      .nonempty("Campo obrigatório")
      .transform((rg: string) => {
        rg = rg.replace(".", "");
        rg = rg.replace(".", "");
        rg = rg.replace(/-/g, "");
        return rg;
      }),

    email: z.string().nonempty("Campo obrigatório"),

    tel: z.string().nonempty("Campo obrigatório"),

    date: z.string().nonempty("Campo obrigatório"),

    gender: z.string().nonempty("Campo obrigatório"),
  });

  type FormSchemaValues = z.infer<typeof FormSchema>;

  const {
    register,
    handleSubmit,
    watch, //Observa o valor do input especificado
    setValue, //Altera o valor de input especificado
    formState: { errors },
  } = useForm<FormSchemaValues>({
    defaultValues: {
      name: "",
      cpf: "",
      rg: "",
      email: "",
      tel: "",
      gender: "",
    },
    resolver: zodResolver(FormSchema),
  });

  const cpfValue = watch("cpf"); //Observando o input CPF
  const rgValue = watch("rg"); //Observando o input CPF
  useEffect(() => {
    setValue("cpf", cpfMask(cpfValue)); //Alterando o valor do input CPF de acordo com a mascara criada
    setValue("rg", rgMask(rgValue)); //Alterando o valor do input CPF de acordo com a mascara criada
  }, [cpfValue, rgValue, setValue]);

  const handleFormSubmit = async (data: FormSchemaValues): Promise<void> => {
    const User = data;
    console.log(User);
  };

  return (
    <Card title="CADASTRO ALUNO">
      <main className="w-full h-full text-black flex flex-col gap-8 justify-around items-center">
        <h1 className="font-bold text-2xl">Aluno</h1>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          name="loginForm"
          className="px-10 w-full h-full text-black flex flex-col gap-8"
        >
          <section className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CustomInput
              text="Nome"
              inputType="text"
              placeHolder="Digite o nome"
              name="name"
              register={register}
            >
              {errors.name && (
                <span className="ml-2 text-red-600 text-sm">
                  {errors.name.message}
                </span>
              )}
            </CustomInput>

            <CustomInput
              text="CPF"
              inputType="text"
              placeHolder="Digite o CPF"
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
              text="RG"
              inputType="text"
              placeHolder="Digite seu RG"
              name="rg"
              register={register}
              maxLength={13}
            >
              {errors.rg && (
                <span className="ml-2 text-red-600 text-sm">
                  {errors.rg.message}
                </span>
              )}
            </CustomInput>

            <CustomInput
              text="Data de nascimento"
              inputType="date"
              name="date"
              register={register}
            >
              {errors.date && (
                <span className="ml-2 text-red-600 text-sm">
                  {errors.date.message}
                </span>
              )}
            </CustomInput>

            <CustomInput
              text="Telefone"
              inputType="tel"
              placeHolder="Digite o telefone"
              name="tel"
              register={register}
            >
              {errors.tel && (
                <span className="ml-2 text-red-600 text-sm">
                  {errors.tel.message}
                </span>
              )}
            </CustomInput>

            <CustomInput
              text="E-mail"
              inputType="email"
              placeHolder="Digite o E-mail"
              name="email"
              register={register}
            >
              {errors.email && (
                <span className="ml-2 text-red-600 text-sm">
                  {errors.email.message}
                </span>
              )}
            </CustomInput>

            <CustomSelect text="Sexo" register={register} name="gender">
              <option className="text-slate-400" value="">
                Escolha o sexo
              </option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </CustomSelect>
          </section>

          {/* Botões */}
          <section className="w-128 m-auto justify-center flex">
            <div className="w-[50%]">
              <Button text="Salvar" type="submit" />
            </div>

            <div className="hidden flex-row gap-4">
              <div className="w-[50%]">
                <Button text="Atualizar" type="submit" />
              </div>
              <div className="w-[50%]">
                <Button text="Proximo" type="submit" />
              </div>
            </div>
          </section>
        </form>
      </main>
    </Card>
  );
}

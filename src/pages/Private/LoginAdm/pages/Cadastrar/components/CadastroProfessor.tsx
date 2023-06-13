import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button, CustomFormInput, CustomSelect } from "src/components";
import { validateBirthDate, validateCPF } from "src/utils/functions";
import { Card } from "src/components";
import { useEffect, useState } from "react";
import { cpfMask, rgMask, telMask } from "src/utils/inputMasks";
import { InputDataProfessor } from "src/constants/InputData";
import { useNavigate } from "react-router-dom";
import { Disciplines } from "src/constants";

export function CadastroProfessor() {
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();

  const FormSchema = z.object({
    nome: z
      .string()
      .nonempty("Campo obrigatório")
      .regex(/^[a-záàâãéèêíïóôõöúçñ ]+$/i, "Apenas letras"),

    cpf: z
      .string()
      .nonempty("Campo obrigatório")
      .min(14, "CPF inválido")
      .refine((cpf) => validateCPF(cpf), "CPF inválido")
      .transform((cpf) => cpf.replace(/[.-]/g, "")),

    rg: z
      .string()
      .nonempty("Campo obrigatório")
      .transform((rg) => rg.replace(/[.-]/g, "")),

    email: z.string().nonempty("Campo obrigatório"),

    disciplina: z.string().nonempty("Campo obrigatório"),

    sexo: z.string().nonempty("Campo obrigatório"),

    tel: z
      .string()
      .nonempty("Campo obrigatório")
      .min(15, "Preencha todo o campo"),

    tel2: z.string(),

    status: z.string().nonempty("Campo obrigatório"),

    dataNascimento: z
      .string()
      .nonempty("Campo obrigatório")
      .refine((date) => validateBirthDate(date), "Data inválida"),
  });

  type FormSchemaValues = z.infer<typeof FormSchema>;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormSchemaValues>({
    defaultValues: {
      nome: "",
      cpf: "",
      rg: "",
      dataNascimento: "",
      email: "",
      disciplina: "",
      status: "",
      tel: "",
      sexo: "",
      tel2: "",
    },
    resolver: zodResolver(FormSchema),
  });

  // Mascaras
  const cpfValue = watch("cpf"); // Observando o input CPF
  const rgValue = watch("rg"); // Observando o input rg
  const telValue = watch("tel"); // Observando o input tel
  const tel2Value = watch("tel2"); // Observando o input tel
  useEffect(() => {
    setValue("cpf", cpfMask(cpfValue)); // Alterando o valor do input cpf de acordo com a mascara criada
    setValue("rg", rgMask(rgValue)); // Alterando o valor do input rg de acordo com a mascara criada
    setValue("tel", telMask(telValue)); // Alterando o valor do input tel de acordo com a mascara criada
    setValue("tel2", telMask(tel2Value)); // Alterando o valor do input tel de acordo com a mascara criada
  }, [cpfValue, rgValue, telValue, tel2Value, setValue]);

  // Submit
  const handleFormSubmit = async (data: FormSchemaValues): Promise<void> => {
    const User = data;
    console.log(User);

    setIsSaved(!isSaved);
  };

  // Finalizar
  const nextPage = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    alert("Cadastro de professor concluído!");
    navigate("/adm");
  };

  return (
    <Card title="CADASTRO PROFESSOR">
      <main className="w-full h-full text-black flex flex-col gap-8 justify-around items-center">
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          name="registerForm"
          className="px-10 w-full h-full text-black flex flex-col gap-8"
        >
          <section className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {InputDataProfessor.map(
              (
                { label, type, placeholder, name, maxLength, required, error },
                index
              ) => (
                <CustomFormInput
                  key={index}
                  text={label}
                  inputType={type}
                  placeHolder={placeholder}
                  name={name}
                  register={register}
                  required={required}
                  maxLength={maxLength}
                  errorFocus={errors[error]?.message}
                >
                  {errors[error] && (
                    <span className="ml-2 text-red-600 text-sm">
                      {errors[error]?.message}
                    </span>
                  )}
                </CustomFormInput>
              )
            )}

            <div>
              <CustomSelect
                text="Sexo"
                register={register}
                name="sexo"
                errorFocus={errors.sexo?.message}
              >
                <option className="text-slate-400" value="">
                  Escolha o sexo
                </option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
              </CustomSelect>
              {errors.sexo && (
                <span className="ml-2 text-red-600 text-sm">
                  {errors.sexo.message}
                </span>
              )}
            </div>

            <div>
              <CustomSelect
                text="Disciplinas"
                register={register}
                name="disciplina"
                errorFocus={errors.disciplina?.message}
              >
                <option className="text-slate-400" value="">
                  Escolha uma disciplina
                </option>
                {Disciplines.map((discipline, index) => (
                  <option key={index} value={discipline.title}>
                    {discipline.title}
                  </option>
                ))}
              </CustomSelect>
              {errors.disciplina && (
                <span className="ml-2 text-red-600 text-sm">
                  {errors.disciplina.message}
                </span>
              )}
            </div>

            <div>
              <CustomSelect
                text="Status"
                register={register}
                name="status"
                errorFocus={errors.status?.message}
              >
                <option className="text-slate-400" value="">
                  Status
                </option>
                <option value="1">Ativo</option>
                <option value="0">Inativo</option>
              </CustomSelect>
              {errors.status && (
                <span className="ml-2 text-red-600 text-sm">
                  {errors.status.message}
                </span>
              )}
            </div>
          </section>

          <section className="w-128 m-auto justify-center flex">
            <div className={`w-[50%] ${isSaved && "hidden"}`}>
              <Button text="Salvar" type="submit" />
            </div>

            <div className={`flex flex-row gap-2 ${!isSaved && "hidden"}`}>
              <div className="w-[50%]">
                <Button text="Atualizar" type="submit" />
              </div>
              <div className="w-[50%]">
                <Button text="Próximo" onClick={nextPage} />
              </div>
            </div>
          </section>
        </form>
      </main>
    </Card>
  );
}

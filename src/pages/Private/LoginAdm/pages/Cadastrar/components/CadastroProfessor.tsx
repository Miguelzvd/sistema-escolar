import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { number, z } from "zod";
import { Button, CustomFormInput, CustomSelect } from "src/components";
import { validateCPF } from "src/utils/functions";
import { Card } from "src/components";
import { useEffect, useState } from "react";
import { cpfMask, rgMask, telMask } from "src/utils/inputMasks";
import { InputDataProfessor } from "src/constants/InputData";
import { useNavigate } from "react-router-dom";
import { Disciplines } from "src/constants";
import { api } from "src/service/api";
import axios from "axios";

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

    telefone: z
      .string()
      .nonempty("Campo obrigatório")
      .min(15, "Preencha todo o campo"),

    StAtivo: z.number(),

    senha:z.string().nonempty("Campo obrigatório"),
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
      email: "",
      disciplina: "",
      StAtivo: 1,
      telefone: "",
      senha: ""
    },
    resolver: zodResolver(FormSchema),
  });

  // Mascaras
  const cpfValue = watch("cpf"); // Observando o input CPF
  const rgValue = watch("rg"); // Observando o input rg
  const telValue = watch("telefone"); // Observando o input tel
  useEffect(() => {
    setValue("cpf", cpfMask(cpfValue)); // Alterando o valor do input cpf de acordo com a mascara criada
    setValue("rg", rgMask(rgValue)); // Alterando o valor do input rg de acordo com a mascara criada
    setValue("telefone", telMask(telValue)); // Alterando o valor do input tel de acordo com a mascara criada
  }, [cpfValue, rgValue, telValue, setValue]);

 

  // Submit
  const handleFormSubmit = async (data: FormSchemaValues): Promise<void> => {
    // const User = data;
    // const cpf = User.cpf
    // const email = User.email
    // const nome = User.nome
    // const rg = User.rg
    // const sexo = User.sexo
    // const tel = User.tel
    // const tel2 = User.tel2
    // const StAtivo = User.StAtivo
    
    
    if (!isSaved) {
      const response = await axios.post("http://localhost:3000/api/insertProf", data);
      alert("Professor cadastrado com sucesso!");
      console.log(response.data);
      setIsSaved(true);

    } 
    else {
      const response = await axios.post("http://localhost:3000/api/updateProf", data);
      alert("Professor atualizado com sucesso!");
      console.log(response.data.msg);
    }
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

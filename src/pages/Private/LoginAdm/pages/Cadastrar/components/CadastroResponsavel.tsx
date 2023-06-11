import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Button,
  CustomInput,
} from "../../../../../../components";
import {
  validateBirthDate,
  validateCPF,
} from "../../../../../../utils/functions";
import { Card } from "../../../../../../components";
import { useEffect, useState } from "react";
import { cpfMask, rgMask } from "../../../../../../utils/inputMasks";
import { inputDataResponsavel } from "../../../../../../constants/inputData";
import { useNavigate } from "react-router-dom";

export function CadastroResponsavel() {
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

    tel: z.string().nonempty("Campo obrigatório"),
    
    tel2: z.string(),

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
      tel: "",
      tel2: "",
    },
    resolver: zodResolver(FormSchema),
  });

  //Mascaras
  const cpfValue = watch("cpf"); //Observando o input CPF
  const rgValue = watch("rg"); //Observando o input CPF
  useEffect(() => {
    setValue("cpf", cpfMask(cpfValue)); //Alterando o valor do input CPF de acordo com a mascara criada
    setValue("rg", rgMask(rgValue)); //Alterando o valor do input CPF de acordo com a mascara criada
  }, [cpfValue, rgValue, setValue]);

  //Submit
  const handleFormSubmit = async (data: FormSchemaValues): Promise<void> => {
    const User = data;
    console.log(User);

    setIsSaved(!isSaved);

  };

  //Proxima pagina
  const nextPage = () => {
    alert("Cadastro de aluno conlcluido!")
    navigate("/adm");
  };
  
  return (
    <Card title="CADASTRO ALUNO">
      <main className="w-full h-full text-black flex flex-col gap-8 justify-around items-center">
        <h1 className="font-bold text-2xl">Responsável</h1>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          name="registerForm"
          className="px-10 w-full h-full text-black flex flex-col gap-8"
        >
          <section className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {inputDataResponsavel.map((input, index) => (
              <CustomInput
                key={index}
                text={input.label}
                inputType={input.type}
                placeHolder={input.placeholder}
                name={input.name}
                register={register}
                maxLength={input.maxLength}
              >
                {errors[input.name] && (
                  <span className="ml-2 text-red-600 text-sm">
                    {errors[input.name].message}
                  </span>
                )}
              </CustomInput>
            ))}

           
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
                <Button text="Proximo" onClick={nextPage} />
              </div>
            </div>
          </section>
        </form>
      </main>
    </Card>
  );
}

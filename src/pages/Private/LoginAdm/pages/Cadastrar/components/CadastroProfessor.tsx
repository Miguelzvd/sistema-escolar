import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CustomInput } from "../../../../../../components";


export function CadastroProfessor() {
  const FormSchema = z.object({
    name: z.string().nonempty("Campo obrigatório"),

    cpf: z
      .string()
      .nonempty("Campo obrigatório")
      .min(14, "CPF inválido")
      .regex(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/, "CPF inválido")
      .transform((cpf: string) => {
        cpf = cpf.replace(".", "");
        cpf = cpf.replace(".", "");
        cpf = cpf.replace(/-/g, "");
        return cpf;
      }),

      rg: z
      .string()
      .nonempty("Campo obrigatório")
  });

  type FormSchemaValues = z.infer<typeof FormSchema>

  const {
    register,
    handleSubmit, //Função de Login
    watch, //Observa o valor do input especificado
    setValue, //Altera o valor de input especificado
    formState: { errors },
  } = useForm<FormSchemaValues>({
    defaultValues: {
      name:"",
      cpf: "",
      rg: "",
    },
    resolver: zodResolver(FormSchema),
  });
  return (
    <main className="p-10 w-[55%] h-full text-black flex flex-col gap-8 justify-around items-center">
      <h1>Aluno</h1>

      <CustomInput
        text="Nome"
        inputType="text"
        htmlFor="name"
        id="name"
        placeHolder="Digite seu nome"
        name="name"
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
    </main>
  );
}

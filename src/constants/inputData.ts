interface IinputData{
  name: string;
  label: string;
  type: string;
  placeholder: string;
  maxLength?: number;
  required?: boolean;
}

interface IinputAlundoData extends IinputData {
  error: "nome" | "cpf" | "rg" | "tel" | "dataNascimento" | "email";
}


interface IinputResponsavelData extends IinputData {
  error: "nome" | "cpf" | "rg" | "tel" | "tel2" | "dataNascimento" | "email";
}

type InputProfessorData = IinputResponsavelData


export const inputDataAluno: IinputAlundoData[] = [
  {
    name: "nome",
    label: "Nome",
    type: "text",
    placeholder: "Digite o nome",
    error: "nome",
  },
  {
    name: "cpf",
    label: "CPF",
    type: "text",
    placeholder: "Digite o CPF",
    maxLength: 14,
    error: "cpf",
  },
  {
    name: "rg",
    label: "RG",
    type: "text",
    placeholder: "Digite seu RG",
    maxLength: 13,
    error: "rg",
  },
  {
    name: "dataNascimento",
    label: "Data de nascimento",
    type: "date",
    placeholder: "",
    maxLength: 10,
    error: "dataNascimento",
  },
  {
    name: "tel",
    label: "Telefone",
    type: "tel",
    placeholder: "Digite o telefone",
    error: "tel",
  },
  {
    name: "email",
    label: "E-mail",
    type: "email",
    placeholder: "Digite o E-mail",
    error: "email",
  },
];

export const inputDataResponsavel: IinputResponsavelData[] = [
  {
    name: "nome",
    label: "Nome",
    type: "text",
    placeholder: "Digite o nome",
    error: "nome",
  },
  {
    name: "cpf",
    label: "CPF",
    type: "text",
    placeholder: "Digite o CPF",
    maxLength: 14,
    error: "cpf",
  },
  {
    name: "rg",
    label: "RG",
    type: "text",
    placeholder: "Digite seu RG",
    maxLength: 13,
    error: "rg",
  },
  {
    name: "dataNascimento",
    label: "Data de nascimento",
    type: "date",
    placeholder: "",
    maxLength: 10,
    error: "dataNascimento",
  },
  {
    name: "tel",
    label: "Telefone",
    type: "tel",
    placeholder: "Digite o telefone",
    error: "tel",
  },
  {
    name: "tel2",
    label: "Telefone 2",
    type: "tel",
    placeholder: "Digite o telefone",
    error: "tel2",
    required: false,
  },
  {
    name: "email",
    label: "E-mail",
    type: "email",
    placeholder: "Digite o E-mail",
    error: "email",
  },
];

export const inputDataProfessor: InputProfessorData[] = [
  {
    name: "nome",
    label: "Nome",
    type: "text",
    placeholder: "Digite o nome",
    error: "nome",
  },
  {
    name: "cpf",
    label: "CPF",
    type: "text",
    placeholder: "Digite o CPF",
    maxLength: 14,
    error: "cpf",
  },
  {
    name: "rg",
    label: "RG",
    type: "text",
    placeholder: "Digite seu RG",
    maxLength: 13,
    error: "rg",
  },
  {
    name: "dataNascimento",
    label: "Data de nascimento",
    type: "date",
    placeholder: "",
    maxLength: 10,
    error: "dataNascimento",
  },
  {
    name: "tel",
    label: "Telefone",
    type: "tel",
    placeholder: "Digite o telefone",
    error: "tel",
  },
  {
    name: "tel2",
    label: "Telefone 2",
    type: "tel",
    placeholder: "Digite o telefone",
    error: "tel2",
  },
  {
    name: "email",
    label: "E-mail",
    type: "email",
    placeholder: "Digite o E-mail",
    error: "email",
  },
];

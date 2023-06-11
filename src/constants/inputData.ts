import { IinputData } from "../types";

interface IinputAlundoData extends IinputData {
  error: "nome" | "cpf" | "rg" | "tel" | "dataNascimento" | "email";
}

interface IinputResponsavelData extends IinputData {
  error: "nome" | "cpf" | "rg" | "tel" | "tel2" | "dataNascimento" | "email";
}

type InputProfessorData = IinputResponsavelData


export const InputDataAluno: IinputAlundoData[] = [
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
    maxLength: 15,
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

export const InputDataResponsavel: IinputResponsavelData[] = [
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

export const InputDataProfessor: InputProfessorData[] = [
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
    maxLength: 15,
  },
  // {
  //   name: "tel2",
  //   label: "Telefone 2",
  //   type: "tel",
  //   placeholder: "Digite o telefone",
  //   error: "tel2",
  //   required: false,
  //   maxLength: 15,
  // },
  {
    name: "email",
    label: "E-mail",
    type: "email",
    placeholder: "Digite o E-mail",
    error: "email",
  },
];
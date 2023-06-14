import { IinputData } from "../types";

interface IinputAlundoData extends IinputData {
  error: "nome" | "cpf" | "rg" | "telefone" | "data_nascimento" | "email" | "sexo" | "senha";
}

interface IinputResponsavelData extends IinputData {
  error: "nome" | "cpf" | "rg" | "telefone" | "telefone2" | "data_nascimento" | "email" | "sexo" | "senha";
}

interface InputProfessorData extends IinputData {
  error: "nome" | "cpf" | "rg" | "telefone" | "email" | "senha" | "sexo";

}


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
    name: "data_nascimento",
    label: "Data de nascimento",
    type: "date",
    placeholder: "",
    maxLength: 10,
    error: "data_nascimento",
  },
  {
    name: "telefone",
    label: "Telefone",
    type: "tel",
    placeholder: "Digite o telefone",
    maxLength: 15,
    error: "telefone",
  },
  {
    name: "email",
    label: "E-mail",
    type: "email",
    placeholder: "Digite o E-mail",
    error: "email",
  },
  {
    name: "senha",
    label: "Senha",
    type: "text",
    placeholder: "Digite a senha",
    error: "senha",
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
    name: "data_nascimento",
    label: "Data de nascimento",
    type: "date",
    placeholder: "",
    maxLength: 10,
    error: "data_nascimento",
  },
  {
    name: "telefone",
    label: "Telefone",
    type: "tel",
    placeholder: "Digite o telefone",
    maxLength: 15,
    error: "telefone",
  },
  {
    name: "telefone2",
    label: "Telefone 2",
    type: "tel",
    placeholder: "Digite o telefone",
    error: "telefone2",
    maxLength: 15,
    required: false,
  },
  {
    name: "email",
    label: "E-mail",
    type: "email",
    placeholder: "Digite o E-mail",
    error: "email",
  },
  {
    name: "senha",
    label: "Senha",
    type: "text",
    placeholder: "Digite a senha",
    error: "senha",
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
    name: "telefone",
    label: "Telefone",
    type: "tel",
    placeholder: "Digite o telefone",
    error: "telefone",
    maxLength: 15,
  },
  {
    name: "email",
    label: "E-mail",
    type: "email",
    placeholder: "Digite o E-mail",
    error: "email",
  },
  {
    name: "senha",
    label: "Senha",
    type: "text",
    placeholder: "Digite a senha",
    error: "senha",
  },
];
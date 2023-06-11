/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldError } from "react-hook-form";

interface InputAlundoData {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  maxLength: number | null;
  error: FieldError | "nome" |"cpf" | "rg" | "tel" | "tel2" | "dataNascimento" | "email";
}

export const inputDataAluno:  InputAlundoData[] = [
    {
      name: "nome",
      label: "Nome",
      type: "text",
      placeholder: "Digite o nome",
      maxLength: null,
      error: "nome"
    },
    {
      name: "cpf",
      label: "CPF",
      type: "text",
      placeholder: "Digite o CPF",
      maxLength: 14,
      error: "cpf"
    },
    {
      name: "rg",
      label: "RG",
      type: "text",
      placeholder: "Digite seu RG",
      maxLength: 13,
      error: "rg"
    },
    {
      name: "dataNascimento",
      label: "Data de nascimento",
      type: "date",
      placeholder: "",
      maxLength: 10,
      error: "dataNascimento"
    },
    {
      name: "tel",
      label: "Telefone",
      type: "tel",
      placeholder: "Digite o telefone",
      maxLength: null,
      error: "tel"
    },
    {
      name: "email",
      label: "E-mail",
      type: "email",
      placeholder: "Digite o E-mail",
      maxLength: null,
      error: "email"
    },
  ];

export const inputDataResponsavel:  InputAlundoData[] = [
    {
      name: "nome",
      label: "Nome",
      type: "text",
      placeholder: "Digite o nome",
      maxLength: null,
      error: "nome"
    },
    {
      name: "cpf",
      label: "CPF",
      type: "text",
      placeholder: "Digite o CPF",
      maxLength: 14,
      error: "cpf"
    },
    {
      name: "rg",
      label: "RG",
      type: "text",
      placeholder: "Digite seu RG",
      maxLength: 13,
      error: "rg"
    },
    {
      name: "dataNascimento",
      label: "Data de nascimento",
      type: "date",
      placeholder: "",
      maxLength: 10,
      error: "dataNascimento"
    },
    {
      name: "tel",
      label: "Telefone",
      type: "tel",
      placeholder: "Digite o telefone",
      maxLength: null,
      error: "tel"
    },
    {
      name: "tel2",
      label: "Telefone 2",
      type: "tel",
      placeholder: "Digite o telefone",
      maxLength: null,
      error: "tel2"
    },
    {
      name: "email",
      label: "E-mail",
      type: "email",
      placeholder: "Digite o E-mail",
      maxLength: null,
      error: "email"
    },
  ];
export const inputDataProfessor:  InputAlundoData[] = [
    {
      name: "nome",
      label: "Nome",
      type: "text",
      placeholder: "Digite o nome",
      maxLength: null,
      error: "nome"
    },
    {
      name: "cpf",
      label: "CPF",
      type: "text",
      placeholder: "Digite o CPF",
      maxLength: 14,
      error: "cpf"
    },
    {
      name: "rg",
      label: "RG",
      type: "text",
      placeholder: "Digite seu RG",
      maxLength: 13,
      error: "rg"
    },
    {
      name: "dataNascimento",
      label: "Data de nascimento",
      type: "date",
      placeholder: "",
      maxLength: 10,
      error: "dataNascimento"
    },
    {
      name: "tel",
      label: "Telefone",
      type: "tel",
      placeholder: "Digite o telefone",
      maxLength: null,
      error: "tel"
    },
    {
      name: "tel2",
      label: "Telefone 2",
      type: "tel",
      placeholder: "Digite o telefone",
      maxLength: null,
      error: "tel2"
    },
    {
      name: "email",
      label: "E-mail",
      type: "email",
      placeholder: "Digite o E-mail",
      maxLength: null,
      error: "email"
    },
  ];
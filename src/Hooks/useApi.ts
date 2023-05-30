import { api } from "../service/api";

export const useApi = () => ({

    validateToken: async (token: string) => {
        return {
            user: {id: 3, name: "miguel", cpf:"341242144", userType: "aluno"},
        };
        const response = await api.post("/validate", { token })
        return response.data; 
    },

    signin: async (cpf:string, password:string, userType:string) => {
        //A response utiliza o metodo post para enviar os dados da api e recebe um objeto como resposta se o usuario é ou nao valido 
        return {
            user: {id: 3, name: "miguel", cpf:"341242144", userType: "aluno"},
            token: "1231243"
        };
        const response = await api.post("/signin", {cpf, password, userType});
        //O "data" se refere a resposta da requisicao 
        return response.data;
    },

    logout: async () => {
        return { status: true }
        const response = await api.post("/logout");
        return response.data; 
    }
});
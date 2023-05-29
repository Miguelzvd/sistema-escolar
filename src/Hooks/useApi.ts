import { api } from "../service/api";

export const useApi = () => ({

    validateToken: async (token: string) => {
        console.log("rodando token")
        return {
            user: {id: 3, name: "miguel", matricula:"341242144", userType: "aluno"},
        };
        const response = await api.post("/validate", { token })
        return response.data; 
    },

    signin: async (matricula:string, password:string, userType:string) => {
        //A response utiliza o metodo post para enviar os dados da api e recebe um objeto como resposta se o usuario é ou nao valido 
        return {
            user: {id: 3, name: "miguel", matricula:"341242144", userType: "aluno"},
            token: "1231243"
        };
        const response = await api.post("/signin", {matricula, password, userType});
        //O "data" se refere a resposta da requisicao 
        return response.data;
    },

    logout: async () => {
        return { status: true }
        const response = await api.post("/logout");
        return response.data; 
    }
});
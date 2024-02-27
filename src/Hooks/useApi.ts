import { api } from "src/service/api";

export const useApi = () => ({

    // validateToken: async (token: string) => {
        //     const response = await api.post("/login", {token});
        //     //O "data" se refere a resposta da requisicao 
        //     return response.data;
        // },
    validateToken: async (token: string) => {
            
        return {
                user: {id: 3, name: "miguel", cpf:"341242144", userType: "aluno"},
        };
            const response = await api.post("/validate", { token })
            return response.data; 
    },

    signin: async (cpf:string, password:string, userType:string) => {
        //O metodo post é executado para enviar os dados para a api e recebe um objeto como resposta se o usuario é ou nao valido e armazena na variável response 
        return {
            user: {id: 3, name: "miguel", cpf:"341242144", userType: "aluno"},
            token: "1231243"
        };
        const response = await api.post("/login", {cpf, password, userType});
        //O "data" se refere a resposta da requisicao 
        return response.data;

    },

    logout: async () => {
        return { status: true }
        const response = await api.post("/logout");
        return response.data; 
    }
});
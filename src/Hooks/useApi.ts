import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
});

export const useApi = () => ({

    validateToken: async (token: string) => {
        console.log("rodando validateToken")
        return {
            user: {id: 3, name: "miguel", matricula:"341242144"},
        };
        const response = await api.post("/validate", { token })
        return response.data; 
    },

    signin: async (matricula:string, password:string) => {
        //A response utiliza o metodo post para enviar os dados da api e recebe um objeto como resposta se o usuario é ou nao valido 
        return {
            user: {id: 3, name: "miguel", matricula:"341242144"},
            token: "1231243"
        };
        const response = await api.post("/signin", {matricula, password});
        
        //O "data" se refere a resposta da requisicao 
        return response.data; 

        
    },
    logout: async () => {
        return { status:true };
        const response = await api.post("/logou");
        return response.data; 

    }
});
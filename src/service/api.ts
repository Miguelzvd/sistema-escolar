import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_APP_API,
});
  
export const  getData = async () => {

  try {
    const response = await axios.post("http://localhost:3000/api/login");
    return response.data.result;
  }
  catch (error) {
    console.log(error);
  }
};

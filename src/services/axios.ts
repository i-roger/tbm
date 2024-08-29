import { parseCookies } from 'nookies';
import axios from 'axios';


export function getAPIClient(ctx?:any) {
  const { "2you.token": token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: "http://localhost:3333/", //URL do BACKEND FICTICIO!
  });

  // Para que a toda requisição seja feito o console.log
  api.interceptors.request.use(config => {
    console.log(config);

    return config;
  });

  // Enviando JWT na requisição
  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  return api;
}
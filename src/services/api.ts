import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8585/",
});

export const cotacao = axios.create({
    baseURL: "https://economia.awesomeapi.com.br/last/",
});

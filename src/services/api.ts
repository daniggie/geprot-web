import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8585/",
});

export default api;

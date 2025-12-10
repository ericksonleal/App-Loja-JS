import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", // endereço do seu backend Node
});

export default api;

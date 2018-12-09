import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/"
});

const apis = {
  loadCategorias: () => api.get("categoria"),
  deleteCategoria: id => api.delete(`categoria/${id}`),
  createCategoria: value => api.post("categoria", { categoria: value })
};

export default apis;

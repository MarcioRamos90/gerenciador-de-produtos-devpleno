import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/"
});

const apis = {
  loadCategorias: () => api.get("categoria"),
  createCategoria: value => api.post("categoria", { categoria: value }),
  editCategoria: categoria => api.put(`categoria/${categoria.id}`, categoria),
  deleteCategoria: id => api.delete(`categoria/${id}`),

  searchCategoria: id => api.get(`categoria/${id}`),
  loadProdutos: id => api.get(`produto?categoria=${id}`),
  createProduto: value => api.post("produto", value),
  editProduto: produto => api.put(`produto/${produto.id}`, produto),
  deleteProduto: id => api.delete(`produto/${id}`)
};

export default apis;

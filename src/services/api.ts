import http from "./http";
import axios from "axios";

const login = async (data: any) => {
  const url = "/api/v1/auth/authenticate";
  return await http.post(url, data);
};
const loadProducts = async (params: any) => {
  const url = "http://localhost:8080/api/v1/products/";
  return await axios.get(url, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

const api = {
  login,
  loadProducts,
};

export default api;

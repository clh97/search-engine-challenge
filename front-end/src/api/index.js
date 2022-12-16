import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export const search = async (query) => {
  const url = api.getUri({ url: "/search", params: { q: query } });
  return await api.get(url);
};

export default api;

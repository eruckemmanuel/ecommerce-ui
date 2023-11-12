import axios from "axios";

const API_URL = "http://localhost:8080";

const baseURL = API_URL;
const Http = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
  },
});

Http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.params = config.params || {};
    if (token) config.headers["Authorization"] = "Bearer " + token;
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

const get = (url: string, config = {}) => {
  return Http.get(url, config);
};

const post = (url: string, data: any, config = {}) => {
  // Ensure the JSON values are string to avoid blocking from WAF rules on AWS
  _convertToStrictJson(data);
  return Http.post(url, data, config);
};

const put = (url: string, data: any, config = {}) => {
  // Ensure the JSON values are string to avoid blocking from WAF rules on AWS
  _convertToStrictJson(data);
  return Http.put(url, data, config);
};

const remove = (url: string) => {
  return Http.delete(url);
};

const _convertToStrictJson = (data: any) => {
  const sensitiveKeywords = ["limit", "offset"];
  for (const key in data) {
    if (sensitiveKeywords.includes(key)) {
      data[key] = String(data[key]);
    }
  }
};

const exportedHttp = {
  get,
  post,
  put,
  remove,
};

export default exportedHttp;

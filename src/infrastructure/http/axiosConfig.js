import Axios from "axios";

export const AxiosInstance = Axios.create({
  //   baseURL: process.env.REACT_APP_API_HOST,
  baseURL: "https://gateway.marvel.com:443/v1/public",
});

AxiosInstance.interceptors.request.use((config) => {
  const token = window.localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
  }
  return config;
});

export const AxiosFetch = async (url) => {
  const res = await AxiosInstance.get(url);
  return res.data;
};

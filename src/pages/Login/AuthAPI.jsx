import axios from "axios";

const TOKEN_TYPE = localStorage.getItem("tokenType");
let ACCESS_TOKEN = localStorage.getItem("accessToken");

// http://220.67.128.173:8080
/** CREATE CUSTOM AXIOS INSTANCE */
export const AuthApi = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    Authorization: `${TOKEN_TYPE} ${ACCESS_TOKEN}`,
  },
});

/** LOGIN API */
export const login = async ({ email, password }) => {
  const data = { email, password };
  const response = await AuthApi.post(`/user/login`, data);
  return response.data;
};

/** SIGNUP API */
export const signUp = async ({
  email,
  password,
  nickname,
  age,
  gender,
  nationality,
}) => {
  const data = { email, password, nickname, age, gender, nationality };
  const response = await AuthApi.post(`/user/signup`, data);
  return response.data;
};

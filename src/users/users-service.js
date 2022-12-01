import axios from "axios";
const REACT_API_BASE_URL = process.env.REACT_API_BASE_URL;

export const createUser = async () => {};

export const findAllUsers = async () => {
  const response = await axios.get(`${REACT_API_BASE_URL}/users`);
  return response.data;
};

export const register = async (user) => {
  const response = await axios.post(`${REACT_API_BASE_URL}/register`, user);
  console.log("res after register: ", response);
  return response.data;
};

export const login = async (user) => {
  const response = await axios.post(`${REACT_API_BASE_URL}/login`, user);
  console.log("res after login: ", response);
  return response.data;
};

export const profile = async () => {
  const response = await axios.post(`${REACT_API_BASE_URL}/profile`);
  return response.data;
};

export const logout = async () => {
  const response = await axios.post(`${REACT_API_BASE_URL}/logout`);
  return response.data;
};

export const deleteUser = async (uid) => {};
export const updateUser = async (uid, userUpdates) => {};

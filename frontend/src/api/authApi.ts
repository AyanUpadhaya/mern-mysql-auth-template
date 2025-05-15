import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const register = async (name: string, email: string, password: string) => {
  const response = await axios.post(`${API_URL}/register`, { name, email, password });
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password }, { withCredentials: true });
  return response.data;
};

export const logout = async () => {
  const response = await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
  return response.data;
};

export const refreshToken = async () => {
  const response = await axios.post(`${API_URL}/refresh-token`, {}, { withCredentials: true });
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await axios.get(`${API_URL}/me`, { withCredentials: true });
  return response.data;
};
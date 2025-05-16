
import axiosInstance from './axiosInstance';


export const register = async (name: string, email: string, password: string) => {
  const response = await axiosInstance.post(`/auth/register`, { name, email, password });
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await axiosInstance.post(`/auth/login`, { email, password });
  return response.data;
};

export const logout = async () => {
  const response = await axiosInstance.post(`/auth/logout`, {});
  return response.data;
};

export const refreshToken = async () => {
  const response = await axiosInstance.post(`/auth/refresh-token`, {});
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await axiosInstance.get(`/auth/me`);
  return response.data;
};
import axiosInstance from "./axiosInstance";

export interface ProductInterface {
  id?: string;
  name: string;
  description: string;
  price: number;
  stock: number;
}

export const getProducts = async () => {
  const response = await axiosInstance.get("/products");
  return response.data;
};

export const getProduct = async (id: string) => {
  const response = await axiosInstance.get(`/products/${id}`);
  return response.data;
};

export const createProduct = async (productData: ProductInterface) => {
  const response = await axiosInstance.post("/products", productData);
  return response.data;
};

export const updateProduct = async (
  id: string,
  productData: Partial<ProductInterface>
) => {
  const response = await axiosInstance.put(`/products/${id}`, productData);
  return response.data;
};

export const deleteProduct = async (id: string) => {
  const response = await axiosInstance.delete(`/products/${id}`);
  return response.data;
};

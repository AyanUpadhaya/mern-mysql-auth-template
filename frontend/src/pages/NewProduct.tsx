import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { useCreateProduct } from "../hooks/useProducts";
import type { Product } from "../types";

const NewProduct = () => {
  const navigate = useNavigate();
  const { mutate: createProduct, isPending } = useCreateProduct();

  const handleSubmit = (data: Product) => {
    createProduct(data, {
      onSuccess: () => {
        navigate("/products");
      },
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Create New Product</h1>
        <button
          onClick={() => navigate("/products")}
          className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Back to Products
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <ProductForm onSubmit={handleSubmit} isLoading={isPending} />
      </div>
    </div>
  );
};

export default NewProduct;

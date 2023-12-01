import axiosInstance from "..";

const ProductsApi = {
  getProducts() {
    return axiosInstance.get('/product/getAllProduct');
  },
};

export default ProductsApi;

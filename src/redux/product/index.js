import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductsApi from "../../api/product";

const initialState = {
  products: [],
  loading: false,
};

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
      state.loading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.loading = false;
    });
  },
});

const getProducts = createAsyncThunk("post/getProducts", async () => {
  try {
    const res = await ProductsApi.getProducts();
    return res.elements;
  } catch (error) {
    throw new Error(error);
  }
});

export const PostAction = {
  getProducts,
};

export const productSelector = (state) => {
  return state.products;
};

export default slice.reducer;

import { ProductType } from "../../../types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductsInterface {
  products: ProductType[] | null;
  status: string;
  error: string;
}

const initialState: ProductsInterface = {
  products: [],
  status: "",
  error: "",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProductInProducts: (
      state: ProductsInterface,
      action: PayloadAction<any>,
    ) => {
      const products = state.products;
      products?.splice(
        products?.findIndex(
          (item) => item.metadata.reference === action.payload.reference,
        ),
        1,
        action.payload,
      );
    },
  },
});

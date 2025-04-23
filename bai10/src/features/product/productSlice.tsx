import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      console.log('Setting products:', action.payload);
      state.products = action.payload;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      console.log('Adding product:', action.payload);
      state.products.push(action.payload);
    },
  },
});

export const { setProducts, addProduct } = productSlice.actions;

export default productSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      console.log('Adding item to cart:', action.payload);
      state.items.push(action.payload);
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      console.log('Removing item from cart with id:', action.payload);
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateItemQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      console.log('Updating item quantity:', action.payload);
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;

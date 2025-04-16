import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',  
  initialState,     
  reducers: {
    increment: (state) => {
      state.count += 1; 
    },
    decrement: (state) => {
      state.count -= 1;
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});

// Tạo actions từ slice
export const { increment, decrement, setCount } = counterSlice.actions;

// Tạo reducer từ slice
export default counterSlice.reducer;

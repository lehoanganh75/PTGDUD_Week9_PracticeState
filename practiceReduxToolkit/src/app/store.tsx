import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../feautures/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,  // Kết nối reducer của counter
  },
});

export default store;

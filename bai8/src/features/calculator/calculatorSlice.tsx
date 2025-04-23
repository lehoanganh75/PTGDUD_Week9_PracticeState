import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  height: number;
  weight: number;
  income: number;
  bmi: number | null;
  tax: number | null;
}

const initialState: CalculatorState = {
  height: 0,
  weight: 0,
  income: 0,
  bmi: null,
  tax: null,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    updateInput: (state, action: PayloadAction<{ field: string; value: number }>) => {
      const { field, value } = action.payload;
      console.log(`Updating field: ${field} with value: ${value}`);  // Log value khi cập nhật input
      state[field as keyof CalculatorState] = value;
    },
    calculateResult: (state) => {
      // Log trước khi tính toán
      console.log('Calculating result with state:', state);

      // Tính BMI
      if (state.height && state.weight) {
        state.bmi = state.weight / (state.height * state.height);
      }

      // Tính thuế thu nhập (Giả sử thuế tính theo công thức đơn giản)
      if (state.income) {
        if (state.income <= 5000) {
          state.tax = state.income * 0.05;
        } else {
          state.tax = state.income * 0.1;
        }
      }

      // Log kết quả sau khi tính toán
      console.log('Calculation result - BMI:', state.bmi, 'Tax:', state.tax);
    },
  },
});

export const { updateInput, calculateResult } = calculatorSlice.actions;

export default calculatorSlice.reducer;

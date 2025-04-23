import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateInput, calculateResult } from './calculatorSlice';
import { RootState, AppDispatch } from '../../app/store';

const CalculatorForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { height, weight, income, bmi, tax } = useSelector((state: RootState) => state.calculator);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(`Input changed - Field: ${name}, New Value: ${value}`);  // Log khi giá trị form thay đổi
    dispatch(updateInput({ field: name, value: Number(value) }));
  };

  const handleCalculate = () => {
    console.log('Handling calculation...');  // Log khi bắt đầu tính toán
    dispatch(calculateResult());
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>📐 Tính Toán BMI & Thuế</h2>

      <div>
        <label>
          Chiều cao (m):
          <input
            type="number"
            name="height"
            value={height}
            onChange={handleInputChange}
            step="0.01"
            placeholder="Nhập chiều cao"
          />
        </label>
      </div>

      <div>
        <label>
          Cân nặng (kg):
          <input
            type="number"
            name="weight"
            value={weight}
            onChange={handleInputChange}
            step="0.1"
            placeholder="Nhập cân nặng"
          />
        </label>
      </div>

      <div>
        <label>
          Thu nhập:
          <input
            type="number"
            name="income"
            value={income}
            onChange={handleInputChange}
            placeholder="Nhập thu nhập"
          />
        </label>
      </div>

      <button onClick={handleCalculate}>Tính Toán</button>

      {bmi !== null && (
        <div>
          <h3>Kết quả BMI: {bmi.toFixed(2)}</h3>
        </div>
      )}

      {tax !== null && (
        <div>
          <h3>Kết quả Thuế Thu Nhập: {tax.toFixed(2)} VNĐ</h3>
        </div>
      )}
    </div>
  );
};

export default CalculatorForm;

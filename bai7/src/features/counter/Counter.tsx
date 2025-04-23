import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, reset, incrementByAmount } from './counterSlice';
import type { RootState, AppDispatch } from '../../app/store';

const Counter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector((state: RootState) => state.counter.value);
  const [step, setStep] = useState<number>(1);

  // Log mỗi khi bước (step) thay đổi
  useEffect(() => {
    console.log('Current step value:', step);
  }, [step]);

  // Log mỗi khi dispatch hành động
  const handleIncrement = () => {
    console.log('Dispatching increment');
    dispatch(increment());
  };

  const handleReset = () => {
    console.log('Dispatching reset');
    dispatch(reset());
  };

  const handleIncrementByAmount = () => {
    console.log('Dispatching incrementByAmount with step:', step);
    dispatch(incrementByAmount(step));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>🧮 Counter: {count}</h2>

      <button onClick={handleIncrement}>➕ Tăng +1</button>
      <button onClick={handleReset} style={{ marginLeft: '10px' }}>
        🔁 Reset
      </button>

      <div style={{ marginTop: '1rem' }}>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          style={{ width: '100px', padding: '5px' }}
        />
        <button
          onClick={handleIncrementByAmount}
          style={{ marginLeft: '10px' }}
        >
          ➕ Tăng +{step}
        </button>
      </div>
    </div>
  );
};

export default Counter;

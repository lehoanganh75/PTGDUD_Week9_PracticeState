import React from 'react';
import CalculatorForm from './features/calculator/CalculatorForm';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';

const App: React.FC = () => {
  const { bmi, tax } = useSelector((state: RootState) => state.calculator);

  console.log('App State - BMI:', bmi, 'Tax:', tax);  // Log state của BMI và Thuế

  return (
    <div className="App">
      <CalculatorForm />
    </div>
  );
};

export default App;

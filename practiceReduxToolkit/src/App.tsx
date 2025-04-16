import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, setCount } from './feautures/counterSlice';

const App = () => {
  const count = useSelector((state: { counter: { count: number } }) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(setCount(10))}>Set Count to 10</button>
    </div>
  );
};

export default App;

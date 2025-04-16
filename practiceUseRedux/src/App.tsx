// src/App.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/counter";
import { RootState } from "./reducers"; // Import kiểu RootState

const App: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter);  // Sử dụng RootState để lấy đúng kiểu của state
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>Increment</button>
      <button onClick={() => dispatch(decrement(5))}>Decrement</button>
    </div>
  );
};

export default App;

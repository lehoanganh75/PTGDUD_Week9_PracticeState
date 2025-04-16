import React from 'react';

const initialTodos = [
  {
    id: 'a',
    task: 'Learn React',
    complete: false,
  },
  {
    id: 'b',
    task: 'Learn Firebase',
    complete: false,
  },
];

const action = {
  type: 'DO_TODO',
  id: 'a',
};

const todoReducer = (state, action) => {
  console.log('Action:', action);  // In ra hành động hiện tại
  console.log('State trước khi thay đổi:', state);  // In ra trạng thái trước khi thay đổi

  switch (action.type) {
    case 'DO_TODO':
      const newStateDo = state.map(todo =>
        todo.id === action.id ? { ...todo, complete: true } : todo
      );
      console.log('State sau khi DO_TODO:', newStateDo);  // In ra trạng thái sau khi thay đổi
      return newStateDo;
    case 'UNDO_TODO':
      const newStateUndo = state.map(todo =>
        todo.id === action.id ? { ...todo, complete: false } : todo
      );
      console.log('State sau khi UNDO_TODO:', newStateUndo);  // In ra trạng thái sau khi thay đổi
      return newStateUndo;
    default:
      return state;
  }
};

const App = () => {
  const [todos, dispatch] = React.useReducer(todoReducer, initialTodos);

  const handleChange = todo => {
    dispatch({
      type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
      id: todo.id,
    });
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleChange(todo)}
            />
            {todo.task}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default App;

import React, { useReducer } from 'react';

// Bước 1: Xác định trạng thái ban đầu
const initialState = [];

// Bước 2: Tạo reducer để xử lý các hành động (actions)
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text }];
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.id
          ? { ...todo, completed: !todo.completed } // Đổi trạng thái completed
          : todo
      );
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

const TodoApp = () => {
  // Bước 3: Sử dụng useReducer để quản lý trạng thái todos
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = React.useState('');

  // Bước 4: Xử lý thêm công việc
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch({ type: 'ADD_TODO', text: newTodo });
      setNewTodo('');
      console.log('Danh sách công việc sau khi thêm:', todos);

    }
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', id });
    console.log('Danh sách công việc hoan thanh:', todos);
  };

  // Bước 5: Xử lý xóa công việc
  const handleRemoveTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', id });
    console.log('Danh sách công việc sau khi xoa:', todos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Nhập công việc"
      />
      <button onClick={handleAddTodo}>Thêm công việc</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => handleToggleTodo(todo.id)}>
              {todo.completed ? 'Chưa hoàn thành' : 'Hoàn thành'}
            </button>
            <button onClick={() => handleRemoveTodo(todo.id)}>Xóa</button>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default TodoApp;

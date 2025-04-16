import React, { useReducer, useEffect } from 'react';
import "./index.css"
// Bước 1: Xác định trạng thái ban đầu
const initialState = { theme: 'light' };

// Bước 2: Tạo reducer để xử lý hành động toggle theme
function themeReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
}

const App = () => {
  // Bước 3: Sử dụng useReducer để quản lý trạng thái theme
  const [state, dispatch] = useReducer(themeReducer, initialState);

  // Bước 4: Effect để áp dụng theme vào body
  useEffect(() => {
    if (state.theme === 'dark') {
      document.body.classList.add('bg-gray-800', 'text-white');
      document.body.classList.remove('bg-white', 'text-black');
    } else {
      document.body.classList.add('bg-white', 'text-black');
      document.body.classList.remove('bg-gray-800', 'text-white');
    }
  }, [state.theme]);

  // Bước 5: Toggle theme
  const handleToggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Toggle Theme with Tailwind CSS</h1>
        <button
          onClick={handleToggleTheme}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Toggle to {state.theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </div>
  );
};

export default App;

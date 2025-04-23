import React from "react";
import { useAuth } from "../context/AuthContext";

const WelcomePage: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="p-6 max-w-sm mx-auto bg-white shadow rounded-xl text-center">
      <h2 className="text-xl font-bold text-green-700">Chào mừng, {user?.name}!</h2>
      <p className="text-gray-600 mb-4">Email: {user?.email}</p>
      <button
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        onClick={logout}
      >
        Đăng xuất
      </button>
    </div>
  );
};

export default WelcomePage;

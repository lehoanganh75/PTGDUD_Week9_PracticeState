import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (!email || !name) return alert("Vui lòng nhập đầy đủ thông tin");
    login({ name, email });
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white shadow rounded-xl text-center">
      <h2 className="text-xl font-bold mb-4">Đăng nhập</h2>
      <input
        className="block w-full mb-2 p-2 border rounded"
        type="text"
        placeholder="Tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="block w-full mb-4 p-2 border rounded"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={handleLogin}
      >
        Đăng nhập
      </button>
    </div>
  );
};

export default LoginPage;

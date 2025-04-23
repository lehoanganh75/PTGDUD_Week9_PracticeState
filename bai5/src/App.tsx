import React from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LoginPage from "./components/Login";
import WelcomePage from "./components/Welcome";

const Main: React.FC = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <WelcomePage /> : <LoginPage />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
};

export default App;

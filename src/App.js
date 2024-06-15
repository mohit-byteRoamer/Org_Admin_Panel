import "./App.css";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { createNavigateRef } from "./utils/common-function";
import { useAuth } from "./feature/auth/context/auth-context";
import MainLayout from "./feature/layout/main-route";
import AuthLayout from "./feature/layout/auth-route";

function App() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    createNavigateRef(navigate);
  }, []);

  const checkAccessToken = useCallback(() => {
    if (localStorage.access_token) {
      return true;
    } else {
      logout();
      return false; // or handle logout scenario as needed
    }
  }, [navigate, logout]);

  return (
    <div className="App">
      {checkAccessToken() ? <MainLayout /> : <AuthLayout />}
    </div>
  );
}

export default App;

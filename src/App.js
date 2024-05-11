import "./App.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { createNavigateRef } from "./utils/common-function";
import { useAuth } from "./feature/context/auth-context";
import MainLayout from "./feature/layout/main-route";
import AuthLayout from "./feature/layout/auth-route";

function App() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    createNavigateRef(navigate);
  }, []);
  return (
    <div className="App">
      {isAuthenticated ? <MainLayout /> : <AuthLayout />}
    </div>
  );
}

export default App;

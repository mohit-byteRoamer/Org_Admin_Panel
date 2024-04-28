import { useNavigate } from "react-router-dom";
import "./App.css";
import AppLayout from "./feature/layout";
import { useEffect } from "react";
import { createNavigateRef } from "./utils/common-function";
import SignIn from "./screen/auth/sign-in";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    createNavigateRef(navigate);
  }, []);
  return (
    <div className="App">
      <SignIn />
      {/* <AppLayout /> */}
    </div>
  );
}

export default App;

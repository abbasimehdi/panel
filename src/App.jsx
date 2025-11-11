import React, { useState } from "react";
import LoginForm from "./auth/LoginForm";
import RegisterForm from "./auth/RegisterForm";

function App() {
  const [page, setPage] = useState("login"); // "login" or "register"

  return page === "login" ? (
    <LoginForm goToRegister={() => setPage("register")} />
  ) : (
    <RegisterForm goToLogin={() => setPage("login")} />
  );
}

export default App;

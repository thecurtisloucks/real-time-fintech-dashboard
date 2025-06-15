import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./AuthContext";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";

function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Dashboard /> : <LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

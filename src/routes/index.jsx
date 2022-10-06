import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import { useEffect, useState } from "react";

const RoutesMain = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("@kenzieHub:token");
    if (token) {
      setToken(token);
    }
  }, []);

  return (
    <Routes>
      {!token ? (
        <Route path="/" element={<Login />} />
      ) : (
        <Route path="/dashboard" element={<Dashboard setToken={setToken} />} />
      )}
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default RoutesMain;

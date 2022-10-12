import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import { useContext } from "react";
import { AuthContext } from "../providers/provider";

const RoutesMain = () => {
  const [token, setToken] = useContext(AuthContext);

  return (
    <Routes>
      {!token ? (
        <Route path="/" element={<Login />} />
      ) : (
        <Route path="/" element={<Dashboard />} />
      )}
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default RoutesMain;

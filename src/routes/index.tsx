import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import { useContext } from "react";
import { AuthContext } from "../providers/provider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RoutesMain = () => {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
    navigate("/");
  }, [token, navigate]);

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

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
  const [token, setToken] = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  });

  return (
    <Routes>
      {!token ? (
        <Route exact path="/" element={<Login />} />
      ) : (
        <Route exact path="/" element={<Dashboard />} />
      )}
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default RoutesMain;

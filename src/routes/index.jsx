import { Routes, Route, Navigate } from "react-router-dom";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";

const RoutesMain = () => (
  <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default RoutesMain;

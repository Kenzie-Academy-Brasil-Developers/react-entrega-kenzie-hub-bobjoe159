import axios from "axios";

const token = localStorage.getItem("@kenzieHub:token");

const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default api;

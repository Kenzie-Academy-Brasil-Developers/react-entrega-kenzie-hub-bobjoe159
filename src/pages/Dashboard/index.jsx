import React, { useEffect, useState } from "react";
import {
  StyledHeader,
  StyledDiv,
  StyledError,
  LinkStyled as Link,
} from "./style";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import api from "../../services/axios";

export default function Dashboard({ setToken }) {
  const [loggedUser, setLoggedUser] = useState("");
  const user = useEffect(() => {
    const userId = localStorage.getItem("@kenzieHub:Id");

    api
      .get(`/users/${userId}`)
      .then((resp) => setLoggedUser(resp.data.name))
      .catch((err) => console.log(err));
  });

  console.log(user);

  function cleanLocalStorage() {
    localStorage.clear();
    toast.success("Logout realizado com sucesso.");
    setTimeout(() => {
      setToken("");
    }, 500);
  }

  return (
    <>
      <ToastContainer theme="dark" />
      <StyledHeader>
        <div>
          <h2>Kenzie Hub</h2>
          <button>
            <Link to="/" onClick={cleanLocalStorage}>
              Logout
            </Link>
          </button>
        </div>
      </StyledHeader>
      <StyledDiv>
        <div>
          <h2>Olá, {loggedUser}</h2>
          <span>Módulo 1 (Introdução ao front-end)</span>
        </div>
      </StyledDiv>
      <StyledError>
        <div>
          <h2>Que pena, estamos em desenvolvimento :(</h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades.
          </p>
        </div>
      </StyledError>
    </>
  );
}

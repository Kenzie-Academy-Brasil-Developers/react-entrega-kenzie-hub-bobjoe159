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
import "animate.css";

export default function Dashboard({ setToken }) {
  const [loggedUser, setLoggedUser] = useState("");
  const [loggedModule, setloggedModule] = useState("");
  useEffect(() => {
    const userId = localStorage.getItem("@kenzieHub:Id");

    api
      .get(`/users/${userId}`)
      .then((resp) => {
        setLoggedUser(resp.data.name);
        setloggedModule(resp.data.course_module);
      })
      .catch((err) => console.log(err));
  });

  function cleanLocalStorage() {
    toast.success("Logout realizado com sucesso.");
    setTimeout(() => {
      setToken("");
      localStorage.clear();
    }, 5000);
  }

  return (
    <>
      <ToastContainer theme="dark" />
      <StyledHeader>
        <div>
          <h2 className="animate__animated animate__fadeInLeft">Kenzie Hub</h2>
          <Link to="/">
            <button
              onClick={cleanLocalStorage}
              className="animate__animated animate__fadeInRight"
            >
              Logout
            </button>
          </Link>
        </div>
      </StyledHeader>
      <StyledDiv className="animate__animated animate__fadeIn animate__delay-1s">
        <div>
          <h2>Olá, {loggedUser}</h2>
          <span>{loggedModule}</span>
        </div>
      </StyledDiv>
      <StyledError className="animate__animated animate__fadeIn">
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

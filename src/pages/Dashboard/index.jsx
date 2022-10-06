import React from "react";
import {
  StyledHeader,
  StyledDiv,
  StyledError,
  LinkStyled as Link,
} from "./style";

export default function Dashboard() {
  return (
    <>
      <StyledHeader>
        <div>
          <h2>Kenzie Hub</h2>
          <button>
            <Link to="/">Voltar</Link>
          </button>
        </div>
      </StyledHeader>
      <StyledDiv>
        <div>
          <h2>Olá, Usuário!</h2>
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

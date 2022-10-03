import React from "react";
import { LoginDiv, LoginTitle, LoginForm } from "./style";

export default function Login() {
  return (
    <>
      <LoginDiv>
        <LoginTitle>Kenzie Hub</LoginTitle>
        <LoginForm>
          <h2>Login</h2>
          <label className="labelEmail">Email</label>
          <input
            className="inputEmail"
            type="email"
            name="email"
            placeholder="Insira seu e-mail"
          />
          <label className="labelPassword">Senha</label>
          <input
            className="inputPassword"
            type="password"
            name="password"
            placeholder="Insira sua senha"
          />
          <button className="loginButton">Entrar</button>
          <p>Ainda não possui uma conta?</p>
          <button className="registerButton">Cadastre-se</button>
        </LoginForm>
      </LoginDiv>
    </>
  );
}

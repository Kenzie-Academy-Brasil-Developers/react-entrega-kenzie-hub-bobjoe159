import styled from "styled-components";

export const LoginDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginTitle = styled.h1`
  text-align: center;
  color: #ff577f;
  padding-top: 50px;
  font-size: 20px;
  margin-bottom: 18px;
`;

export const LoginForm = styled.form`
  color: #f8f9fa;
  background-color: #212529;
  min-width: 320px;
  font-size: 14px;
  padding: 34px 18px;
  border-radius: 4px;
  margin-inline: 12px;

  h2 {
    color: #f8f9fa;
    text-align: center;
  }

  p {
    text-align: center;
    margin-bottom: 18px;
    color: #868e96;
    font-size: 12px;
  }

  button {
    width: 100%;
    margin-bottom: 34px;
    padding-block: 10px;
    border-radius: 4px;
    border: none;
  }

  .inputEmail,
  .inputPassword {
    display: block;
    margin: 0 auto;
    text-align: left;
    width: 100%;
    padding-block: 8px;
    background-color: #868e96;
    color: #ffffff;
    border-radius: 4px;
    padding-inline: 4px;
    outline: none;
  }

  .inputEmail::placeholder,
  .inputPassword::placeholder {
    color: #ffffff;
  }

  .labelEmail,
  .labelPassword {
    text-align: left;
    display: block;
    margin-block: 20px;
    font-size: 12px;
    font-weight: 400;
  }

  .inputPassword {
    margin-bottom: 34px;
  }

  .loginButton {
    background-color: #ff577f;
    color: #ffffff;
    cursor: pointer;
  }

  .registerButton {
    background-color: #868e96;
    color: #ffffff;
    cursor: pointer;
  }
`;

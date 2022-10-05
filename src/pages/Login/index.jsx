import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoginDiv, LoginTitle, LoginForm } from "./style";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function Login() {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  function handleLogin(data) {
    console.log(data);
  }

  return (
    <LoginDiv>
      <LoginTitle>Kenzie Hub</LoginTitle>
      <LoginForm onSubmit={handleSubmit(handleLogin)}>
        <h2>Login</h2>
        <label htmlFor="email" className="labelEmail">
          Email
        </label>
        <input
          className="inputEmail"
          type="email"
          name="email"
          id="email"
          placeholder="Insira seu e-mail"
          {...register("email")}
        />
        <label htmlFor="password" className="labelPassword">
          Senha
        </label>
        <input
          className="inputPassword"
          type="password"
          name="password"
          id="password"
          placeholder="Insira sua senha"
          {...register("password")}
        />
        <button className="loginButton">Entrar</button>
        <p>Ainda não possui uma conta?</p>
        <button className="registerButton">Cadastre-se</button>
      </LoginForm>
    </LoginDiv>
  );
}

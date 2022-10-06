import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginDiv, LoginTitle, LoginForm, LinkStyled as Link } from "./style";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required("O email é obrigatório."),
  password: yup.string().required("Obrigatório digitar uma senha."),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
          autoComplete="off"
          {...register("email")}
        />
        <p className="errorMessage">{errors.email?.message}</p>
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
        <p className="errorMessage">{errors.password?.message}</p>
        <button className="loginButton">Entrar</button>
        <p className="accountAlert">Ainda não possui uma conta?</p>
        <div className="registerButton">
          <Link to="/register">Cadastre-se</Link>
        </div>
      </LoginForm>
    </LoginDiv>
  );
}

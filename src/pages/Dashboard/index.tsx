import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/provider";
import { useForm } from "react-hook-form";
import {
  StyledHeader,
  StyledDiv,
  StyledError,
  LinkStyled as Link,
  StyledUl,
  ModalStyled,
} from "./style";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import api from "../../services/axios";
import "animate.css";
import Card from "../../components/Card";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "animate.css";

const schema = yup.object({
  status: yup.string().required(),
});

interface iCard {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}

interface iRegisterTechs {
  title: string;
  status: string;
}

export default function Dashboard() {
  const { setToken, loggedUserTechs, setUserTechs } = useContext(AuthContext);

  const [loggedUser, setLoggedUser] = useState("");
  const [loggedModule, setloggedModule] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [userEdit, setUserEdit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterTechs>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const userId = localStorage.getItem("@kenzieHub:Id");
    const asyncCallback = async () => {
      await api
        .get(`/users/${userId}`)
        .then((resp) => {
          setLoggedUser(resp.data.name);
          setloggedModule(resp.data.course_module);
          setUserTechs(resp.data.techs);
        })
        .catch((err) => console.log(err));
    };
    asyncCallback();
  }, [userEdit, setUserTechs, setToken]);

  function cleanLocalStorage() {
    toast.success("Logout realizado com sucesso.");
    setToken("");
    localStorage.clear();
  }

  async function handleRegisterTech(data: iRegisterTechs) {
    await api
      .post("/users/techs/", data)
      .then((resp) => {
        console.log(resp);
        toast.success("Tecnologia adicionada com sucesso.");
        setIsOpen(false);
        setUserTechs([...loggedUserTechs, data]);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Alguma coisa deu errado. :(");
      });
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  ModalStyled.setAppElement("#root");

  const bg = {
    overlay: {
      backgroundColor: "rgba(18, 18, 20, 0.5)",
    },
  };

  return (
    <>
      <ToastContainer theme="dark" />
      <ModalStyled
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modalRegister animate__animated animate__fadeInDown"
        style={bg}
      >
        <form onSubmit={handleSubmit(handleRegisterTech)}>
          <div className="headerModal">
            <h1>Cadastrar tecnologia</h1>
            <span onClick={closeModal}>X</span>
          </div>
          <div className="contentModal">
            <label htmlFor="technology">Nome</label>
            <input
              type="text"
              id="technology"
              placeholder="Digite a tecnologia"
              {...register("title")}
            />
            <p className="errorMessage">{errors.title?.message}</p>
            <label htmlFor="status">Selecionar status</label>
            <select id="status" {...register("status")}>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
            <p className="errorMessage">{errors.status?.message}</p>
            <button>Cadastrar tecnologia</button>
          </div>
        </form>
      </ModalStyled>
      <StyledHeader>
        <div>
          <h2 className="animate__animated animate__fadeInLeft">Kenzie Hub</h2>
          <Link to="/">
            <button
              onClick={cleanLocalStorage}
              className="logoutButton animate__animated animate__fadeInRight"
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
        <header>
          <h2>Tecnologias</h2>
          <img
            className="addIcon"
            src="../../buttonPlus.png"
            alt="Button Plus"
            onClick={openModal}
          />
        </header>
        <div>
          <StyledUl>
            {loggedUserTechs ? (
              loggedUserTechs.map((card: iCard) => (
                <Card key={card.id} card={card} setUserEdit={setUserEdit} />
              ))
            ) : (
              <></>
            )}
          </StyledUl>
        </div>
      </StyledError>
    </>
  );
}

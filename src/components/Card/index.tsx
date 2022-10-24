import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { StyledCard } from "./style";
import api from "../../services/axios";
import { AiFillEdit } from "react-icons/ai";
import { ModalStyled } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/provider";
import { useContext } from "react";
import "animate.css";

const schema = yup.object({
  status: yup.string().required("Selecione alguma tecnologia"),
});

interface iCard {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}

interface iCardProps {
  card: iCard;
  setUserEdit: any;
}

interface iUpdateTech {
  status: string;
}

interface iDeleteTech {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}

export default function Card({ card, setUserEdit }: iCardProps) {
  const { setUserTechs } = useContext(AuthContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [classAnimate, setClassAnimate] = useState(false);

  const { register, handleSubmit } = useForm<iUpdateTech>({
    resolver: yupResolver(schema),
  });

  async function handleDelete() {
    setClassAnimate(true);
    await api
      .delete(`/users/techs/${card.id}`)
      .then((resp) => {
        console.log(resp);
        toast.success("Tecnologia removida com sucesso.");
        setClassAnimate(true);
        setUserTechs((oldUserTechs: []) => {
          console.log(oldUserTechs);
          return oldUserTechs.filter(
            (userTech: iDeleteTech) => userTech.id !== card.id
          );
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function handleEdit(data: iUpdateTech) {
    api
      .put(`/users/techs/${card.id}`, data)
      .then((resp) => {
        console.log(resp);
        toast.success("Tecnologia editada com sucesso!");
        console.log(data);
        setIsOpen(false);
        setUserEdit(true);
        setTimeout(() => {
          setUserEdit(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
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
    // SE HOUVER O CLASS ANIMATE TRUE, ELA VAI PEGAR A CLASSE E ADICIONAR AS DUAS"
    <StyledCard
      className={`${classAnimate && "animate__animated animate__backOutRight"}`}
    >
      <ModalStyled
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={bg}
        className="modalRegister animate__animated animate__fadeInDown"
      >
        <div>
          <h2>Editar Tecnologia: {card.title}</h2>
          <span onClick={closeModal}>X</span>
        </div>
        <form onSubmit={handleSubmit(handleEdit)}>
          <label>Selecionar novo status</label>
          <select id="editTechnology" {...register("status")}>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>
          <button>Editar tecnologia</button>
        </form>
      </ModalStyled>
      <p>{card.title}</p>
      <div className="infosCard">
        <p>{card.status}</p>
        <img
          className="trashIcon"
          src="../../trash.png"
          alt="Lixeira"
          onClick={handleDelete}
        />
        <AiFillEdit className="editIcon" onClick={openModal} />
      </div>
    </StyledCard>
  );
}

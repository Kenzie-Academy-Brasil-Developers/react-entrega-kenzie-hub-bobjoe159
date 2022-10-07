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
import "animate.css";

const schema = yup.object({
  status: yup.string().required("Selecione alguma tecnologia"),
});

export default function Card({ card, setUserTechs }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [classAnimate, setClassAnimate] = useState(false);

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  function handleDelete() {
    setClassAnimate(true);
    api
      .delete(`/users/techs/${card.id}`)
      .then((resp) => {
        console.log(resp);
        toast.success("Tecnologia removida com sucesso.");
        setClassAnimate(true);
        setTimeout(() => {
          setUserTechs((oldUserTechs) => {
            return oldUserTechs.filter((userTech) => userTech.id !== card.id);
          });
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEdit(data) {
    api
      .put(`/users/techs/${card.id}`, data)
      .then((resp) => {
        console.log(resp);
        toast.success("Tecnologia editada com sucesso!");
        setIsOpen(false);
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
          <select
            name="editTechnology"
            id="editTechnology"
            {...register("status")}
          >
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

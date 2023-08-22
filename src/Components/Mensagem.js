import React from "react";
import style from '../css/Mensagem.module.css'

const Mensagem = ({ mensagem }) => {
  return <div className={style.mensagem}>{mensagem}</div>;
};

export default Mensagem;

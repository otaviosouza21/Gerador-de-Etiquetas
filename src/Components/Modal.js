import React from "react";
import style from "../css/Modal.module.css";
import Button from "./Button";
import update from "../Assets/printer-svgrepo-com.svg";
import Input from "./Input";

const Modal = ({ setModal, modal, ticketList }) => {
  return (
    <>
      <section className={style.container}>
        <div className={style.modal}>
          <h1>Volumes</h1>
          
            {ticketList.map((tiket,index) => {
             return <li key={index} className={style.pedido}>
                <div className={style.dadosPedido}>
                  <h3>{tiket.pedido}</h3>
                  <h4>{tiket.nome}</h4>
                  <p>{tiket.endereco}</p>
                </div>
                <div className={style.carga}>
                  <h3>Carga/Volume</h3>
                  <Input />
                </div>
              </li>;
            })}
          
          <Button text="Imprimir" iconUpdate={update} />
          <div
            onClick={() => setModal(!modal)}
            className={style.closeButton}
          ></div>
        </div>
      </section>
    </>
  );
};

export default Modal;

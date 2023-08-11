import React from "react";
import style from "../css/Modal.module.css";
import Imprimir from "./Imprimir";
import { GlobalContext } from "../Context/GlobalContext";
import Card from "./Card";

const Modal = ({ setModal, modal, ticketList }) => {
  const { data, setData } = React.useContext(GlobalContext);

  return (
    <>
      <section className={style.container}>
        <div className={style.modal}>
          <h1>Volumes</h1>
          {ticketList.map((tiket, index) => {
           
            return <Card tiket={tiket} index={index} key={index}/>; 
          })}
          <Imprimir
            data={data}
            setData={setData}
            ticketList={ticketList}
          />
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

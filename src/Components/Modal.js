import React from "react";
import style from "../css/Modal.module.css";
import Button from "./Button";
import update from "../Assets/printer-svgrepo-com.svg";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Input from "./Input";

const Modal = ({setModal,modal}) => {
  return (
    <section className={style.container}>
      <div className={style.modal}>
        <h1>Volumes</h1>

        <li className={style.pedido}>
          <div className={style.dadosPedido}>
            <h3>Pedido: 1000</h3>
            <h4>Cliente: COD 306 ALBERTO DA SILVA </h4>
            <p>Endereço: Rua Barão do Rio Branco</p>
          </div>
          <div className={style.carga}>
            <h3>Carga/Volume</h3>
            <Input />
          </div>
        
        </li>
        <Button text="Imprimir" iconUpdate={update} />
        <div onClick={()=>setModal(!modal)} className={style.closeButton}></div>
      </div>
    </section>
  );
};

export default Modal;

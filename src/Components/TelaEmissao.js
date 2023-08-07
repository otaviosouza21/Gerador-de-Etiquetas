import React from "react";
import style from "../css/TelaEmissao.module.css";
import logo from "../Assets/Logo-removebg-preview.png";
import Button from "./Button";
import iconUpdate from "../Assets/update.svg";
import print from "../Assets/printer-svgrepo-com.svg";
import Grid from "./Grid";
import Modal from "./Modal";

const TelaEmissao = ({ pedido, setUpdate, update }) => {
  const [modal, setModal] = React.useState(false);

  return (
    <section className={style.container}>
      <header>
        <div className={style.header}>
          <div className={style.logo}>
            <img src={logo} />
          </div>

          <h1>Emissão de Etiquetas</h1>
          <div className={style.buttons}>
            <Button
              icon={update}
              text="Atualizar"
              Color="#2D7A12"
              letterColor="#FFF"
              setUpdate={setUpdate}
              update={update}
              iconUpdate={iconUpdate}
            />
            <Button
              iconUpdate={print}
              text="Imprimir"
              Color="#9C9C9C"
              letterColor="#242323"
              setModal={setModal}
              modal={modal}
            />
          </div>
        </div>
      </header>
      <Grid pedido={pedido} />
      {modal && <Modal setModal={setModal} modal={modal} />}
    </section>
  );
};

export default TelaEmissao;

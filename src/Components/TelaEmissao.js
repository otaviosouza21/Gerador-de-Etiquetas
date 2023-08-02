import React from "react";
import style from "../css/TelaEmissao.module.css";
import logo from "../Assets/Logo-removebg-preview.png";
import Button from "./Button";
import update from "../Assets/update.svg";
import print from "../Assets/printer-svgrepo-com.svg";

const TelaEmissao = () => {
  return (
    <section className={style.container}>
      <div>
        <div className={style.titles}>
          <img src={logo} />
          <h1>Emissão de Etiquetas</h1>
        </div>

        <div className={style.buttons}>
          <Button
            icon={update}
            text="Atualizar"
            Color="#2D7A12"
            letterColor="#FFF"
          />
          <Button
            icon={print}
            text="Imprimir"
            Color="#9C9C9C"
            letterColor="#242323"
          />
        </div>
      </div>
    </section>
  );
};

export default TelaEmissao;

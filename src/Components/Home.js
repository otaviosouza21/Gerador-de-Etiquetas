import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import style from "../css/Home.module.css";
import box from "../Assets/box.svg";
import produto from "../Assets/produtos.svg";

const Home = () => {
  return (
    <main className={style.container}>
      <Link to="/etiqueta-pedidos">
        <img src={box} />
        PEDIDOS
      </Link>

      <Link to="/etiqueta-produtos">
        {" "}
        <img src={produto} />
        PRODUTOS
      </Link>
    </main>
  );
};

export default Home;

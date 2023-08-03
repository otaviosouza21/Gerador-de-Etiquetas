import React from "react";
import style from "../css/Grid.module.css";
import checkUn from '../Assets/check-box-unchecked-svgrepo-com.svg'

const Grid = ({ pedido }) => {
  const [arrayPedidos, setArrayPedidos] = React.useState([]);

  const titulos = pedido.map((ped) => ped.name.split("-"));

  let titleArray = titulos.map((tit, idx) => {
    return {
      pedido: tit[0].slice(3),
      nome: tit[1],
    };
  });

  console.log(titleArray);

  return (
    <section className={`${style.container}`}>
      {titleArray.map((title) => {
        return (
          <>
            <ul className={style.column}>
              <li>
                <img src={checkUn}/>
              </li>
            </ul>
            <ul className={style.column}>
              <li>{title.pedido}</li>
            </ul>
            <ul className={style.column}>
              <li>{title.nome}</li>
            </ul>
            <ul className={style.column}>
              <li>Endereço</li>
            </ul>
            <ul className={style.column}>
              <li>Volume</li>
            </ul>
          </>
        );
      })}
    </section>
  );
};

export default Grid;

import React from "react";
import style from "../css/Card.module.css";
import Input from "./Input";
import { GlobalContext } from "../Context/GlobalContext";

const Card = ({ tiket, index }) => {
  const [carga, setCarga] = React.useState({
    A: 0,
    B: 0,
    C: 0,
    S: 0,
  });

  const { repeat, setRepeat } = React.useContext(GlobalContext);

  React.useEffect(() => {
    const updatedCargas = [...repeat]; // Crie uma cópia da array Repeat
    updatedCargas[index] = carga; // Atualize o item na posição index
    setRepeat(updatedCargas); // Atualize o estado Repeat com a cópia modificada
  }, [carga]);


  return (
    <li className={style.pedido}>
      <div className={style.dadosPedido}>
        <h3>{tiket.pedido}</h3>
        <h4>{tiket.nome}</h4>
        <p>{tiket.endereco}</p>
      </div>
      <div className={style.carga}>
        <h3>Carga/Volume</h3>
        <Input setCarga={setCarga} index={index} carga={carga} />
      </div>
    </li>
  );
};

export default Card;

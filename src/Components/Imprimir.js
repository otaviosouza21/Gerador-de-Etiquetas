import React from "react";
import { NavLink } from "react-router-dom";
import print from "../Assets/printer-svgrepo-com.svg";
import style from "../css/Imprimir.module.css";
import { GlobalContext } from "../Context/GlobalContext";


const Imprimir = ({ ticketList, setData }) => {
  const { checkImpressao, setCheckImpressao, repeat, setMessage } =
    React.useContext(GlobalContext);
  let isCarga = 0;

  for (let key in repeat[0]) {
    isCarga += repeat[0][key];
  }

  function handleCLick(e) {
    if (isCarga <= 0) {
      e.preventDefault()
      setCheckImpressao(false);
      setMessage(true)
      setTimeout(()=>setMessage(false),2000)
    } else {
      setCheckImpressao(true);
      setData(ticketList);
      setMessage(false)
    }
  }

  return (
    <NavLink className={style.imprimir} onClick={handleCLick} to={checkImpressao ? "/etiqueta" : ""}>
      <img src={print}></img>
      IMPRIMIR
    </NavLink>
  );
};

export default Imprimir;

import React from "react";
import { NavLink } from "react-router-dom";
import print from "../Assets/printer-svgrepo-com.svg";
import style from "../css/Imprimir.module.css";
import { GlobalContext } from "../Context/GlobalContext";

const Imprimir = ({ ticketList, data, setData, carga }) => {
  const { checkImpressao, setCheckImpressão,repeat } = React.useContext(GlobalContext);


  function handleCLick() {
  
        setData(ticketList, carga);
        setCheckImpressão(true)
    
   
  }



  return (
    <NavLink
      className={style.imprimir}
      onClick= {handleCLick}
      to={checkImpressao ? "/etiqueta" : null}
    >
      <img src={print}></img>
      IMPRIMIR
    </NavLink>
  );
};

export default Imprimir;

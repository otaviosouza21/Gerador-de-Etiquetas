import React from "react";
import { NavLink } from "react-router-dom";

const Imprimir = ({ticketList,data,setData,carga}) => {

function handleCLick(){
    setData(ticketList,carga)
}

 return(
     <NavLink onClick={handleCLick} to="/etiqueta">
 IMPRIMIR
  </NavLink>
 )
};

export default Imprimir;

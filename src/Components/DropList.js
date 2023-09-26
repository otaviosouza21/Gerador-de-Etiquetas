/* import React from "react";
import style from "../css/DropList.module.css";
import { GlobalContext } from "../Context/GlobalContext";

const DropList = () => {
const {select,setSelect} = React.useContext(GlobalContext)


function handleChange(e){
    setSelect(e.target.value)
}

  return (
    <select value={select} onChange={handleChange} className={style.dropMenu}>
      <option>Planejamento</option>
      <option>Separação</option>
      <option>Processamento</option>
      <option>Faturamento</option>
      <option>Finalizados</option>
    </select>
  );
};

export default DropList;
 */
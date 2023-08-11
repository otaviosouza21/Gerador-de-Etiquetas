import React from "react";
import style from "../css/Input.module.css";
import plus from "../Assets/plus-svgrepo-com.svg";
import sub from "../Assets/subtract-svgrepo-com.svg";

const Input = ({setCarga,carga}) => {
  
  function handleDecrement(key){
    setCarga(prevCarga=>({
      ...prevCarga,[key]:prevCarga[key]-1
    }))
  
  }

  function handleIncrement(key){
    setCarga(prevCarga=>({
      ...prevCarga,[key]:prevCarga[key]+1
    }))
  }



  return (
    <ul className={style.container}>
    {Object.keys(carga).map(key => (
      <li className={style.campo} key={key}>
        <label>{key}</label>
        <label className={style.plusSub}>
          <img src={sub} onClick={() => handleDecrement(key)} />
          {carga[key]}
          <img src={plus} onClick={() => handleIncrement(key)} />
        </label>
      </li>
    ))}
  </ul>
  );
};

export default Input;

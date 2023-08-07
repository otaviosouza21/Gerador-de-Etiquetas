import React from "react";
import style from "../css/Input.module.css";

const Input = () => {
  return (
    <div className={style.container}>
      <div className={style.campo}>
        <label>A:</label>
        <input type="number" placeholder="insira a quantidade"></input>
      </div>
      <div className={style.campo}>
        <label>B:</label>
        <input type="number" placeholder="insira a quantidade"></input>
      </div>
      <div className={style.campo}>
        <label>C:</label>
        <input type="number" placeholder="insira a quantidade"></input>
      </div>
      <div className={style.campo}>
        <label>S:</label>
        <input type="number" placeholder="insira a quantidade"></input>
      </div>
      
    </div>
  );
};

export default Input;

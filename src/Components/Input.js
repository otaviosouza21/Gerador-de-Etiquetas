import React from "react";
import style from "../css/Input.module.css";

const Input = () => {


  return (
    <div className={style.container}>
      <div className={style.campo}>
        <label>A:</label>
       <input min={0} type="number" placeholder="0"></input> 
      </div>
      <div className={style.campo}>
        <label>B:</label>
        <input min={0} type="number" placeholder="0"></input>
      </div>
      <div className={style.campo}>
        <label>C:</label>
        <input min={0} type="number" placeholder="0"></input>
      </div>
      <div className={style.campo}>
        <label>S:</label>
        <input min={0} type="number" placeholder="0"></input>
      </div>
      
    </div>
  );
};

export default Input;

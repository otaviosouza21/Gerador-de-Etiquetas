import React from "react";
import style from "../css/Button.module.css";

const Button = ({ iconUpdate, text, Color, letterColor, setUpdate, update }) => {


  return (
    <button
      className={`${style.button} ${text}`}
      style={{ color: letterColor, background: Color }}
      onClick={() => {
        if(setUpdate) setUpdate(!update)
      }}
    >
      <img src={iconUpdate} />
      {text}
    </button>
  );
};

export default Button;

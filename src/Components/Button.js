import React from "react";
import style from "../css/Button.module.css";

const Button = ({ icon, text, Color, letterColor }) => {
  return (
    <button
      className={`${style.button} ${text}`}
      style={{ color: letterColor, background: Color }}
    >
      <img src={icon} />
      {text}
    </button>
  );
};

export default Button;

import React from "react";
import style from "../css/Button.module.css";


const Button = ({
  iconUpdate,
  text,
  Color,
  letterColor,
  setUpdate,
  update,
  setModal,
  modal,
}) => {
  return (
    <button
      className={`${style.button} ${text}`}
      style={{ color: letterColor, background: Color }}
      onClick={() => {
        if (setUpdate) setUpdate(!update);
        if (setModal) setModal(!modal);
      }}
    >
      <img src={iconUpdate} />
      {text}
    </button>
  );
};

export default Button;

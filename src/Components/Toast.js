import React from "react";
import style from "../css/Toast.module.css";

const Toast = ({ estado, text, color }) => {
  setTimeout(() => {
    estado(false);
  }, 3000);

  return (
    <div style={{ background: color }} className={style.toast}>
      <p>{text}</p>
      <button style={{ background: color }} onClick={() => estado(false)} className={style.close}>
        X
      </button>
    </div>
  );
};

export default Toast;

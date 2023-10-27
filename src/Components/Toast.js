import React from "react";
import style from "../css/Toast.module.css";
import { Alert } from "@mui/material";


const Toast = ({ estado, text, color }) => {
  setTimeout(() => {
    estado(false);
  }, 3000);

  const erro = () => {
    if (text === "Item não encontrado") return "error";
    if (text === "Este item já foi inserido") return "warning";
  };

  return (
    <Alert severity={erro()} className={style.toast} >
      {text}
    </Alert>
  );
};

export default Toast;

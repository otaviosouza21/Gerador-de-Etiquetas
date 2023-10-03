import React from "react";
import style from "../css/Toast.module.css";

const Toast = ({setErro}) => {

    setTimeout(()=>{
        setErro(false)
    },3000)

  return (
    <div className={style.toast}>
        <p>Não foi possivel encontrar o item</p>
        <button onClick={()=>setErro(false)} className={style.close}>X</button>
    </div>
  );
};

export default Toast;

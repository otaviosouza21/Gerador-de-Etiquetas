import React from "react";
import style from "../css/Etiqueta.module.css";
import qr from "../Assets/qrcode-svgrepo-com.svg";
import { GlobalContext } from "../Context/GlobalContext";

const Etiqueta = () => {
  const { data, repeat } = React.useContext(GlobalContext);

  return (
    <div>
      {data.map((dados, index) => {
        const keys = Object.keys(repeat[index]);
        const props = keys.map((prop) => repeat[index][prop]);
        const quantidade = props.reduce((a, b) => a + b, 0);
        const etiquetas = [];

        keys.forEach((item, index) => {
          if (props[index] > 0) {
            for (let i = 0; i < props[index]; i++) {
              etiquetas.push(
                <div key={i} className={style.etiqueta}>
                  <div className={style.titulo}>
                    <h2>{dados.nome}</h2>
                    <h2>PEDIDO {dados.pedido}</h2>
                  </div>
                  <div className={style.dados}>
                    <span>{dados.endereco}</span>
                  </div>
                  <div className={style.carga}>
                    {item}
                    {i + 1}
                  </div>
                  <div className={style.code}>
                    <img src={qr} />
                  </div>
                </div>
              );
            }
          }
        });

        return <section className={style.container}>{etiquetas}</section>;
      })}
    </div>
  );
};

export default Etiqueta;

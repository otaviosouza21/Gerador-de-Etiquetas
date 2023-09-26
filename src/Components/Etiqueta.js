import React from "react";
import style from "../css/Etiqueta.module.css";
import { GlobalContext } from "../Context/GlobalContext";
import QRCode from "qrcode.react";

const Etiqueta = () => {
  const { data, repeat } = React.useContext(GlobalContext);

  return (
    <div>
      {data.map((dados, index) => {
        const keys = Object.keys(repeat[index]);
        const props = keys.map((prop) => repeat[index][prop]);
        const etiquetas = [];

        keys.forEach((item, index) => {
          if (props[index] > 0) {
            for (let i = 0; i < props[index]; i++) {
              const qrData = dados.pedido + " " + item + Number(i + 1);
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
                    <QRCode value={qrData} />
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

import React from "react";
import { GlobalContext } from "../Context/GlobalContext";
import logo from "../Assets/Logo.png";
import style from "../css/EtiquetaDeProduto.module.css";
import { Print, PrintProvider } from "react-print";
import print from "../Assets/printer-svgrepo-com.svg";

const EtiquetaDeProdutos = () => {
  const { gridProdutos } = React.useContext(GlobalContext);

  function converteParaReal(numero) {
    return numero.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <section className={style.container}>
      {gridProdutos.map((prod) => {
        const etiquetas = [];
        for (let i = 0; i < prod[0].quantidade; i++) {
          etiquetas.push(
            <div className={style.etiqueta} key={i}>
              <div className={style.titulo}>
                <h4>{prod[0]["CÓD. INTERNO"]}</h4>
              </div>
              <div className={style.infos}>
                <span className={style.descricao}>{prod[0]["DESCRIÇÃO"]}</span>
                <p className={style.preco}>
                  {converteParaReal(prod[0]["VLR. VENDA (1)"])}
                </p>
              </div>
            </div>
          );
        }
        return etiquetas;
      })}
      <button className={style.printButton} onClick={window.print}>
        <img src={print} />
        Imprimir
      </button>
    </section>
  );
};

export default EtiquetaDeProdutos;

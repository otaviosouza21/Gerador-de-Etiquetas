import React from "react";
import { ReactToPrint } from "react-to-print";
import EtiquetaDeProdutos from "./EtiquetaDeProdutos.js";

class PrintButton extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <button>Imprimir Etiquetas</button>}
          content={() => this.componentRef}
        />
        <EtiquetaDeProdutos ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default PrintButton;

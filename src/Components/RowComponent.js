import { TableCell, TableRow } from "@mui/material";
import React from "react";
import plus from "../Assets/plus-svgrepo-com.svg";
import sub from "../Assets/subtract-svgrepo-com.svg";
import trash from "../Assets/trash.svg";
import style from "../css/TelaEmissaoProdutos.module.css";

const RowComponent = ({ produto, gridProdutos, index, setGridProdutos }) => {

  function converteParaReal(numero) {
    return numero.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  const [plusSub, setPlusSub] = React.useState(() => {
    return gridProdutos[index][0].quantidade || 1;
  });

  React.useEffect(() => {
    gridProdutos[index][0].quantidade = plusSub;
  }, []);


  const handleAdd = () => {
    setPlusSub(plusSub + 1);
    gridProdutos[index][0].quantidade = 0;
    gridProdutos[index][0].quantidade = plusSub + 1;
  };

  const handleSub = () => {
    if (plusSub > 0) {
      setPlusSub(plusSub - 1);
      gridProdutos[index][0].quantidade = 0;
      gridProdutos[index][0].quantidade = plusSub - 1;
    }
  };

  const handleExclue = () => {
    const updatedGridProdutos = [...gridProdutos];
    updatedGridProdutos.splice(index, 1);
    setGridProdutos(updatedGridProdutos);
  };

  return (
    <TableRow>
      <TableCell>{produto[0]["CÓD. INTERNO"]}</TableCell>
      <TableCell>{produto[0]["DESCRIÇÃO"]}</TableCell>
      <TableCell>{converteParaReal(produto[0]["VLR. VENDA (1)"])}</TableCell>
      <TableCell>
        <div className={style.subPlus}>
          <img onClick={handleSub} src={sub} />
          {plusSub || 0}
          <img onClick={handleAdd} src={plus} />
        </div>
      </TableCell>
      <TableCell>
        <img className={style.trash} src={trash} onClick={handleExclue} />
      </TableCell>
    </TableRow>
  );
};

export default RowComponent;

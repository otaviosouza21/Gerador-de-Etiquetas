import React from "react";
import Search from "./Search";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { GlobalContext } from "../Context/GlobalContext";
import SubirArquivo from "../API/SubirArquivo";
import style from "../css/TelaEmissaoProdutos.module.css";
import ExcelConverter from "../API/ExcelConverter";
import RowComponent from "./RowComponent";

const TelaEmissaoProdutos = () => {
  const { gridProdutos, setGridProdutos } = React.useContext(GlobalContext);

  return (
    <section className={style.container}>
      <ExcelConverter />
      <h1>Etiqueta para Produtos</h1>
      <SubirArquivo />
      <Search
        place="Insira o codigo do produto"
        label="Codigo"
        gridProdutos={gridProdutos}
      />
      <TableContainer className={style.table} component={Paper}>
        <Table>
          <TableHead>
            <TableRow className={style.header}>
              <TableCell>Codigo</TableCell>
              <TableCell>Produto</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Quantidade</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gridProdutos &&
              gridProdutos.map((produto, index) => {
                return (
                  <RowComponent
                    key={index}
                    gridProdutos={gridProdutos}
                    setGridProdutos={setGridProdutos}
                    produto={produto}
                    index={index}
                  />
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default TelaEmissaoProdutos;

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
import plus from '../Assets/plus-svgrepo-com.svg';
import sub from '../Assets/subtract-svgrepo-com.svg'

const TelaEmissaoProdutos = () => {
  const { gridProdutos } = React.useContext(GlobalContext);

  return (
    <section className={style.container}>
      <h1>Etiqueta para Produtos</h1>
      <SubirArquivo />
      <Search place="Insira o codigo do produto" label="Codigo" />
      <TableContainer className={style.table} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Codigo</TableCell>
              <TableCell>Produto</TableCell>
              <TableCell>Valor</TableCell>
              <TableCell>Quantidade</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {gridProdutos &&
              gridProdutos.map((produto) => {
                return (
                  <TableRow>
                    <TableCell>{produto[0]["CÓD. INTERNO"]}</TableCell>
                    <TableCell>{produto[0]["DESCRIÇÃO"]}</TableCell>
                    <TableCell>{produto[0]["VLR. VENDA (1)"]}</TableCell>
                    <TableCell>
                      <div className={style.subPlus}>
                        <img src={sub} />
                        2
                        <img src={plus} />
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default TelaEmissaoProdutos;

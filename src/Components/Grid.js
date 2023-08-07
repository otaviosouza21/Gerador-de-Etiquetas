import React from "react";
import style from "../css/Grid.module.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import checkUn from "../Assets/check-box-unchecked-svgrepo-com.svg";
import checked from "../Assets/check-box-svgrepo-com.svg";

const Grid = ({ pedido }) => {
  const [checkedRows, setCheckedRows] = React.useState([]);

  const titulos = pedido.map((ped) => ped.name.split("-")); // Faz uma iteração no titulo e separa Pedido/Cliente
  const desc = pedido.map((ped) => ped.desc.split("*")); // Faz uma iteração em cada descriçao e separa Endereço/Carga

  // Map que faz a iteração por cada titulo do card (PEDIDO/CLIENTE)
  let titleArray = titulos.map((tit, idx) => {
    /*     let volumes = "";
    let cargasVolumes = "";
    let quantCargasVolumes = {}; */

    /* if (desc[idx][1]) {
      volumes = desc[idx][1].trim().split("-");
      cargasVolumes = volumes.map((vol) => {
        const cargas = vol.trim().split("");
        const quantidade = cargas.map((quant) => quant);
        return {
          carga: quantidade[0],
          volume: +quantidade[1],
        };
      });
    } else {
      volumes = 0;
      cargasVolumes = 0;
    } */

    return {
      pedido: tit[0].slice(3),
      nome: tit[1],
      endereco: desc[idx][0],
    };
  });

  //Marca o checkbox da lista de pedidos
  const toggleRowCheck = (index) => {
    const newCheckedRows = [...checkedRows];
    if (newCheckedRows.includes(index)) {
      newCheckedRows.splice(newCheckedRows.indexOf(index), 1);
    } else {
      newCheckedRows.push(index);
    }
    setCheckedRows(newCheckedRows);
  };

  // calcula o total de volumes
  /*   const total = titleArray[0].cargasVolumes.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.volume;
    },
    0
  ); */

  return (
    <TableContainer className={style.grid} component={Paper}>
      <Table className={style.table}>
        <TableHead>
          <TableRow className={style.header}>
            <TableCell>Check</TableCell>
            <TableCell>Pedido</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Endereço</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={style.body}>
          {titleArray.map((tit, index) => {
            const isChecked = checkedRows.includes(index);

            {
              return (
                <TableRow
                  onClick={() => toggleRowCheck(index)}
                  key={index}
                  style={isChecked ? { background: "#90db94" } : null}
                >
                  <TableCell>
                    <img src={isChecked ? checked : checkUn}></img>
                  </TableCell>
                  <TableCell>{tit.pedido}</TableCell>
                  <TableCell>{tit.nome}</TableCell>
                  <TableCell>{tit.endereco}</TableCell>
                </TableRow>
              );
            }
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Grid;

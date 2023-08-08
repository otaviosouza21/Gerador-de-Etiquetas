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

const Grid = ({ pedido, setTicketList, ticketList }) => {
  const [checkedRows, setCheckedRows] = React.useState([]);

  const titulos = pedido.map((ped) => ped.name.split("-")); // Faz uma iteração no titulo e separa Pedido/Cliente
  const desc = pedido.map((ped) => ped.desc.split("*")); // Faz uma iteração em cada descriçao e separa Endereço/Carga

  // Map que faz a iteração por cada titulo do card (PEDIDO/CLIENTE)
  let titleArray = titulos.map((tit, idx) => {
    return {
      pedido: tit[0].slice(3),
      nome: tit[1],
      endereco: desc[idx][0],
    };
  });

  //Marca o checkbox da lista de pedidos
  const toggleRowCheck = (index) => {
    const newCheckedRows = [...checkedRows];
    let updatedTicketList = [...ticketList];

    if (newCheckedRows.includes(index)) {
      newCheckedRows.splice(newCheckedRows.indexOf(index), 1);
      updatedTicketList = updatedTicketList.filter((_, idx) => idx !== index);
    } else {
      newCheckedRows.push(index);
      updatedTicketList.push(titleArray[index]);
    }

    setCheckedRows(newCheckedRows);
    setTicketList(updatedTicketList);
  };


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
                  onClick={() => {
                    toggleRowCheck(index);
                  }}
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

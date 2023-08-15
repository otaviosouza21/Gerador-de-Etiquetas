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

const Grid = ({ pedido, setTicketList, ticketList, loading, error }) => {
  const [checkedRows, setCheckedRows] = React.useState([]);

  const titulos = pedido.map((ped) => ped.name.split("-")); // Faz uma iteração no titulo e separa Pedido/Cliente
  const desc = pedido.map((ped) => ped.desc.split("*")); // Faz uma iteração em cada descriçao e separa Endereço/Carga
  const labels = pedido.map((lab, index) => lab.labels);

 

  // Map que faz a iteração por cada titulo do card (PEDIDO/CLIENTE)
  let titleArray = titulos.map((tit, idx) => {
    return {
      id: idx,
      pedido: tit[0].slice(3),
      nome: tit[1],
      endereco: desc[idx][0],
    };
  });

 

  //Marca o checkbox da lista de pedidos
  const toggleRowCheck = (id) => {
    const newCheckedRows = [...checkedRows];
    let updatedTicketList = [...ticketList];

    if (newCheckedRows.includes(id)) {
      newCheckedRows.splice(newCheckedRows.indexOf(id), 1);
      updatedTicketList = updatedTicketList.filter((item) => item.id !== id);
    } else {
      newCheckedRows.push(id);
      updatedTicketList.push(titleArray.find((item) => item.id === id));
    }

    setCheckedRows(newCheckedRows);
    setTicketList(updatedTicketList);
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Deu um erro</p>;
  else
    return (
      <TableContainer className={style.grid} component={Paper}>
        <Table className={style.table}>
          <TableHead>
            <TableRow className={style.header}>
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Endereço</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={style.body}>
            {titleArray.map((tit, index) => {
              const isChecked = checkedRows.includes(index);

              {
                return (
                  <TableRow
                    onClick={() => {
                      toggleRowCheck(tit.id);
                    }}
                    key={tit.id}
                    style={isChecked ? { background: "#90db94" } : null}
                  >
                    <TableCell>{tit.pedido}</TableCell>
                    <TableCell>{tit.nome}</TableCell>
                    <TableCell>{tit.endereco}</TableCell>
                    <TableCell className={style.labels}>
                      {labels[index].map((lab) => {
                        return (
                          <span style={{ background: lab.color }}>
                            {lab.name}
                          </span>
                        );
                      })}
                    </TableCell>
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

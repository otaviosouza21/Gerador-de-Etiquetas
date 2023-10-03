import React from "react";
import style from "../css/TelaEmissao.module.css";
import logo from "../Assets/Logo-removebg-preview.png";
import Button from "./Button";
import iconUpdate from "../Assets/update.svg";
import print from "../Assets/printer-svgrepo-com.svg";
import truck from '../Assets/truck-speed-svgrepo-com.svg';
import Grid from "./Grid";
import Modal from "./Modal";
import { GlobalContext} from "../Context/GlobalContext";
import DropList from "./DropList";


const TelaEmissao = ({ pedido, setUpdate, update, loading, error }) => {
  const [modal, setModal] = React.useState(false);
  const [ticketList, setTicketList] = React.useState([]);
 

  return (
    <section className={style.container}>
      <header>
        <div className={style.header}>
          <h1>Etiqueta para Pedidos</h1>
          <div className={style.buttons}>
            {/* <DropList /> */}
            <Button
              icon={update}
              text="Atualizar"
              Color="#2D7A12"
              letterColor="#FFF"
              setUpdate={setUpdate}
              update={update}
              iconUpdate={iconUpdate}
            />
            <Button
              iconUpdate={truck}
              text="Selecionar Carga"
              Color="#9C9C9C"
              letterColor="#242323"
              setModal={setModal}
              modal={modal}
            /> <span className={style.selecionados}>{ticketList.length}</span> 
          </div>
        </div>
      </header>
      <Grid
        pedido={pedido}
        setTicketList={setTicketList}
        ticketList={ticketList}
        loading={loading}
        error={error}
      />
      {modal && (
        <Modal setModal={setModal} modal={modal} ticketList={ticketList} />
      )}
    
    </section>
  );
};

export default TelaEmissao;

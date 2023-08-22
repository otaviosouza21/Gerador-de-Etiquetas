import React from "react";
import style from "../css/Modal.module.css";
import Imprimir from "./Imprimir";
import { GlobalContext } from "../Context/GlobalContext";
import Card from "./Card";
import close from '../Assets/close-svgrepo-com.svg'
import Mensagem from "./Mensagem";

const Modal = ({ setModal, modal, ticketList }) => {
  const { data, setData,message } = React.useContext(GlobalContext);
  const ref = React.useRef()

function handleClick(event){
if(event.target === ref.current) setModal(!modal) 

}

 

  return (
    <>
      <section className={style.container} ref={ref} onClick={handleClick}>
      {message && <Mensagem mensagem="Não há nenhum volume selecionado" />}
        <div className={`${style.modal} animation`}>
        <div onClick={()=>setModal(!modal)}
            className={style.closeButton}
          >
            <img src={close}></img>
          </div>
          <h1>Volumes</h1>
          {ticketList.map((tiket, index) => {
           
            return <Card tiket={tiket} index={index} key={index}/>; 
          })}
          <Imprimir
            data={data}
            setData={setData}
            ticketList={ticketList}
          />
       
        </div>
      </section>
    </>
  );
};

export default Modal;

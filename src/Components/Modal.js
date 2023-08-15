import React from "react";
import style from "../css/Modal.module.css";
import Imprimir from "./Imprimir";
import { GlobalContext } from "../Context/GlobalContext";
import Card from "./Card";
import close from '../Assets/close-svgrepo-com.svg'

const Modal = ({ setModal, modal, ticketList }) => {
  const { data, setData } = React.useContext(GlobalContext);
  const ref = React.useRef()

function handleClick(event){
if(event.target === ref.current) setModal(!modal) 

}

 

  return (
    <>
      <section className={style.container} ref={ref} onClick={handleClick}>
        
        <div className={style.modal}>
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

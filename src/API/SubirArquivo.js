import React from "react";
/* import style from "../estilo/css/SubirArquivo.module.css"; */
 import ExcelConverter from './ExcelConverter'; 
 import style from '../css/SubirArquivo.module.css'

const SubirArquivo = () => {
const [mandaFile,setMandaFile] = React.useState(null)



function handleChange(event){

    const file = event.target.files[0]
    setMandaFile(file)
}


  return (
    <div className={style.container}>
      <label htmlFor="fileInput">Busque a sua base de Produtos</label>
      <input onChange={handleChange}  id="fileInput" type="file" accept=".xlsx, .xls, .csv" />
      {mandaFile && <ExcelConverter file={mandaFile}/>}
    </div>
  );
};

export default SubirArquivo;

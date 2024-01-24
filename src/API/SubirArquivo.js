import React from "react";
/* import style from "../estilo/css/SubirArquivo.module.css"; */
import ExcelConverter from "./ExcelConverter";
import style from "../css/SubirArquivo.module.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Alert, AlertTitle } from "@mui/material";
import toast from "../css/Toast.module.css";

const SubirArquivo = () => {
  const [mandaFile, setMandaFile] = React.useState(null);
  const [atualizaHora, setAtualizaHora] = React.useState(null);
  const [alertaDias, setAlertaDias] = React.useState(null);

  // puxa a ultima data da modificação do localstorage
  React.useEffect(() => {
    const puxaAtual = window.localStorage.getItem("updateTabela");
    setAtualizaHora(puxaAtual);
  }, [mandaFile]);

  // formata as datas para comparar update e data atual e emitir alerta
  function formataHora(data) {
    const dataComputador = new Date();

    const diaComputador = dataComputador.getDate();
    const mesComputador = dataComputador.getMonth() + 1;
    const anoComputador = dataComputador.getUTCFullYear();

    const dia = data.lastModifiedDate.getDate();
    const mes = data.lastModifiedDate.getMonth() + 1;
    const ano = data.lastModifiedDate.getUTCFullYear();
    const hora = data.lastModifiedDate.getHours();
    const minuto = data.lastModifiedDate.getMinutes();

    //monta datas para comparar
    const data1 = new Date(`${ano}-${mes}-${dia}`);
    const data2 = new Date(
      `${anoComputador}-${mesComputador}-${diaComputador}`
    );

    // apura a diferença de dias
    const diasPassados = Math.floor(
      Math.abs((data1 - data2) / (1000 * 60 * 60 * 24))
    );

    // se estiver passado 7 dias desde a importação, ativa o alerta
    if (diasPassados > 7) {
      setAlertaDias(diasPassados);
    } else setAlertaDias(null);

    const horaFormatada = `${dia}/${mes}/${ano} ás ${hora}:${minuto}`;

    return horaFormatada;
  }

  // coleta o arquivo excel e grava a data da ultima modificação
  function handleChange(event) {
    const file = event.target.files[0];
    setMandaFile(file);

    window.localStorage.setItem("updateTabela", formataHora(file));
  }

  //define o estilo do botao de subir arquivo
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <div className={style.container}>
      <Alert severity="info">
        Tabela Atualizada Em: <strong> {atualizaHora}</strong>
      </Alert>
      {alertaDias && (
        <Alert
          action={
            <Button
              onClick={() => setAlertaDias(null)}
              color="inherit"
              size="small"
            >
              X
            </Button>
          }
          severity="warning"
          className={toast.toast}
        >
          <AlertTitle>Atenção!</AlertTitle>A Tabela atual foi atualizada a{" "}
          <strong>{alertaDias} dias</strong> , verifique se os preços estão
          corretos!
        </Alert>
      )}
      <Button component="label" variant="contained">
        Importar Tabela de Preços
        <VisuallyHiddenInput
          id="fileInput"
          accept=".xlsx, .xls, .csv"
          type="file"
          onChange={handleChange}
        />
      </Button>

      {mandaFile && <ExcelConverter file={mandaFile} />}
    </div>
  );
};

export default SubirArquivo;

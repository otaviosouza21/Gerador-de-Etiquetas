import React from "react";
import { GET_CARDS, GET_PLUGIN } from "../API/api";
import useFetch from "../API/useFetch";
import TelaEmissao from "./TelaEmissao";
import Modal from "./Modal";
import { GlobalContext } from "../Context/GlobalContext";

const Home = () => {


  const { data, loading, error, request } = useFetch();
  const {
    data: pluginData,
    loading: pluginLoading,
    error: pluginError,
    request: pluginRequest,
  } = useFetch();
  const [update, setUpdate] = React.useState(false);
  /*   const { select } = React.useContext(GlobalContext);
  const [lista, setLista] = React.useState(null);

  const planejamento = "649c21e30a61075e5017ccff";
  const separacao = "649c21ed465a00f1c2cb7ef7";
  const processamento = "649c2690ff086960de8e1114";
  const faturamento = "649c21e8a9fa1e2a7c2f8ced";
  const finalizados = "649c21fcec3652a902a9709d"; */

  React.useEffect(() => {
    const { url, options } = GET_CARDS();
    request(url, options);
  }, [update]);

  React.useEffect(() => {
    const { url, options } = GET_PLUGIN();
    pluginRequest(url, options);
  }, [update]);


  if (data)
    return (
      <TelaEmissao
        loading={loading}
        error={error}
        setUpdate={setUpdate}
        update={update}
        pedido={data}
      />
      
    )
};

export default Home;

import React from "react";
import { GET_CARDS, GET_PLUGIN } from "../API/api";
import useFetch from "../API/useFetch";
import TelaEmissao from "./TelaEmissao";
import Modal from "./Modal";
import { GlobalStorage } from "../Context/GlobalContext";

const Home = () => {
  const { data, loading, error, request } = useFetch();
  const {
    data: pluginData,
    loading: pluginLoading,
    error: pluginError,
    request: pluginRequest,
  } = useFetch();
  const [update, setUpdate] = React.useState(false);

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
     
        <TelaEmissao loading={loading} error={error} setUpdate={setUpdate} update={update} pedido={data} />
    
    );
};

export default Home;

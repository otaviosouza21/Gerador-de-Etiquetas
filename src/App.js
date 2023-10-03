import React from "react";
import Home from "./Components/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Etiqueta from "./Components/Etiqueta";
import { GlobalContext, GlobalStorage } from "./Context/GlobalContext";
import TelaEmissaoProdutos from "./Components/TelaEmissaoProdutos";
import TelaEmissao from "./Components/TelaEmissao";
import { GET_CARDS, GET_PLUGIN } from "./API/api";
import useFetch from "./API/useFetch";
import Menu from "./Components/Menu";
import EtiquetaDeProdutos from "./Components/EtiquetaDeProdutos";
import PrintButton from "./Components/PrintButton";

function App() {
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

  return (
    <BrowserRouter>
      <Menu />
      <GlobalStorage>
        <Routes>
          <Route path="/Gerador-de-Etiquetas" element={<Home />} />
          <Route
            path="/etiqueta-pedidos"
            element={
              <TelaEmissao
                loading={loading}
                error={error}
                setUpdate={setUpdate}
                update={update}
                pedido={data}
              />
            }
          />
          <Route path="etiqueta" element={<Etiqueta />} />
          <Route path="/etiqueta-produtos" element={<TelaEmissaoProdutos />} />
          <Route path="/etiqueta-gerada" element={<EtiquetaDeProdutos/>} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
}
export default App;

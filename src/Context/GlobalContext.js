import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [data, setData] = React.useState([]);
  const [repeat, setRepeat] = React.useState([]);
  const [checkImpressao, setCheckImpressao] = React.useState(false);
  const [message, setMessage] = React.useState(false);
  const [produtos, setProdutos] = React.useState(null);
  const [gridProdutos, setGridProdutos] = React.useState([]);
 

  /* const [select,setSelect] = React.useState("Separação") */

  return (
    <GlobalContext.Provider
      value={{
        data,
        setData,
        repeat,
        setRepeat,
        checkImpressao,
        setCheckImpressao,
        message,
        setMessage,
        produtos,
        setProdutos,
        gridProdutos,
        setGridProdutos,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

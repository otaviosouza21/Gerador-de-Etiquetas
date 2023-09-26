import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [data, setData] = React.useState([]);
  const [repeat, setRepeat] = React.useState([]);
  const [checkImpressao, setCheckImpressao] = React.useState(false);
  const [message, setMessage] = React.useState(false);
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
       /*  select,
        setSelect */
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

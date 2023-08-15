import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  
  const [data, setData] = React.useState([]);
  const [repeat,setRepeat] = React.useState([])
  const [checkImpressao,setCheckImpressao] =React.useState(false)

  return (
    <GlobalContext.Provider value={{ data, setData, repeat, setRepeat,checkImpressao,setCheckImpressao }}>
      {children}
    </GlobalContext.Provider>
  );
};
import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  
  const [data, setData] = React.useState([]);
  const [repeat,setRepeat] = React.useState([])

  return (
    <GlobalContext.Provider value={{ data, setData, repeat, setRepeat }}>
      {children}
    </GlobalContext.Provider>
  );
};
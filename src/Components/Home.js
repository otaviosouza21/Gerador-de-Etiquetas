import React from "react";
import { GET_CARDS, GET_PLUGIN } from "../API/api";
import useFetch from "../API/useFetch";
import Cards from "./Cards";
import TelaEmissao from "./TelaEmissao";

const Home = () => {
  const { data, loading, error, request } = useFetch();
  const { data: pluginData, loading: pluginLoading, error: pluginError, request: pluginRequest } = useFetch();
  const [update, setUpdate] = React.useState(false);

  React.useEffect(() => {
    const { url, options } = GET_CARDS();
    request(url, options);
  }, [update]);

  React.useEffect(() => {
    const { url, options } = GET_PLUGIN()
    pluginRequest(url, options);
  }, [update]);

 


  if (data)
    return (
      <main>
        <TelaEmissao />

      {/*   {data.map((card,idx) => {
          return <Cards key={idx} card={card} />;
        })}
        <button onClick={() => setUpdate(!update)}>Update</button> */}
      </main>
    );
};

export default Home;

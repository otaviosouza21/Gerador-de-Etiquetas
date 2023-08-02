import React, { useEffect } from "react";
import { GET_CARD } from "../API/api";
import useFetch from "../API/useFetch";

const Cards = ({ card }) => {
  const [cardInfo, setCardInfo] = React.useState([]);
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = GET_CARD(card.id);
    request(url, options);
  }, []);

console.log(data);

  if (card)
    return (
      <section>
        <h1>{card.name}</h1>
        
      </section>
    );
};

export default Cards;

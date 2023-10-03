import React from "react";
import style from "../css/Search.module.css";
import plus from "../Assets/plus-svgrepo-com.svg";
import { GlobalContext } from "../Context/GlobalContext";
import Toast from "./Toast";
import print from '../Assets/printer-svgrepo-com.svg'

const Search = ({ place, label }) => {
  const [search, setSearch] = React.useState("");
  const { produtos, gridProdutos, setGridProdutos } =
    React.useContext(GlobalContext);
  const [enviaDados, setEnviaDados] = React.useState(false);
  const [pesquisa, setPesquisa] = React.useState(null);
  const [erro, setErro] = React.useState(false);

  function handleChange(e) {
    const searchAtual = e.target.value;
    setSearch(searchAtual);

    if (produtos) {
      const filtroPesquisa = produtos.filter((prod) => {
        return prod["CÓD. INTERNO"] == searchAtual;
      });

      if (filtroPesquisa.length > 0) setPesquisa(filtroPesquisa);
      else {
        setPesquisa(null);
      }
    }
  }

  function handleClick() {
    if (pesquisa) {
      setGridProdutos([...gridProdutos, pesquisa]);
    } else {
      setErro(true);
    }
  }

  return (
    <div className={style.search}>
      {erro && <Toast setErro={setErro} />}
      <input
        type="text"
        onChange={handleChange}
        value={search}
        placeholder={place}
        id={label}
      />
      <img onClick={handleClick} src={plus} />
      <img style={{background: "gray"}} src={print} />
    </div>
  );
};

export default Search;

import React from "react";
import style from "../css/Search.module.css";
import plus from "../Assets/plus-svgrepo-com.svg";
import { GlobalContext } from "../Context/GlobalContext";
import Toast from "./Toast";
import print from "../Assets/printer-svgrepo-com.svg";
import { Link } from "react-router-dom";

const Search = ({ place, label }) => {
  const [search, setSearch] = React.useState("");
  const { produtos, gridProdutos, setGridProdutos } =
    React.useContext(GlobalContext);
  let [pesquisa, setPesquisa] = React.useState(null);
  const [erro, setErro] = React.useState(false);
  const [repetido, setRepetido] = React.useState(false);

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

  function handleClick(targ) {
    const repetido =
      pesquisa &&
      gridProdutos?.some((val) => {
        return val[0]["CÓD. INTERNO"].includes(pesquisa[0]["CÓD. INTERNO"]);
      });

    if (pesquisa && repetido !== true) {
      setGridProdutos([...gridProdutos, pesquisa]);
      setSearch("");
    } else if (pesquisa && repetido !== false) {
      setRepetido(true);
    } else if (pesquisa === null) {
      setErro(true);
      setSearch("");
    }
    setPesquisa(() => (pesquisa = null));
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }

  return (
    <div className={style.search}>
      {erro && (
        <Toast color="red" text="Item não encontrado" estado={setErro} />
      )}
      {repetido && (
        <Toast
          color="yellow"
          text="Este item já foi inserido"
          estado={setRepetido}
        />
      )}
      <input
        type="text"
        onChange={handleChange}
        value={search}
        placeholder={place}
        id={label}
        onKeyPress={handleKeyPress}
      />
      <img tabIndex="0" onClick={handleClick} src={plus} />
      <Link className={style.print} to="/etiqueta-gerada">
        <img src={print} />
        <span>{gridProdutos.length} Produtos</span>
      </Link>
    </div>
  );
};

export default Search;

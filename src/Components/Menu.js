import React from "react";
import produtos from "../Assets/produtos.svg";
import box from "../Assets/box.svg";
import home from '../Assets/home.svg'
import style from '../css/Menu.module.css'
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className={style.menu}>
      <ul className={style.lista}>
        <li>
          <NavLink to='/Gerador-de-Etiquetas' activeClassName={style.active}>
            <img src={home}/>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/etiqueta-pedidos" activeClassName={style.active}>
            <img src={box}/>
            Pedidos/Cargas
          </NavLink>
        </li>
        <li>
          <NavLink to="/etiqueta-produtos" activeClassName={style.active}>
            <img src={produtos}/>
            Produtos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

import React from "react";
import Home from "./Components/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Etiqueta from "./Components/Etiqueta";
import { GlobalStorage } from "./Context/GlobalContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Routes>
          <Route path="/Gerador-de-Etiquetas" element={<Home />} />
          <Route path="etiqueta" element={<Etiqueta />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
}
export default App;

import React from "react";
import Style from "./Style.css";
import Resumo from "./Pages/Resumo";
import Sidenav from "./Components/Sidenav";
import Header from "./Components/Header";
import { DataContextprovider } from "./Context/DataContext";
import Vendas from "./Pages/Vendas";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Venda from "./Pages/Venda";

const App = () => {
  return (
    <BrowserRouter>
      <DataContextprovider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Resumo />} />
              <Route path="/vendas" element={<Vendas />} />
              <Route path="/vendas/:id" element={<Venda />} />
            </Routes>
          </main>
        </div>
      </DataContextprovider>
    </BrowserRouter>
  );
};

export default App;

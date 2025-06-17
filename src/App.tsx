import React from "react";
import Style from "./Style.css";
import Resumo from "./Pages/Resumo";
import Sidenav from "./Components/Sidenav";
import Header from "./Components/Header";
import { DataContextprovider } from "./Context/DataContext";
import Vendas from "./Pages/Vendas";

const App = () => {
  return (
    <DataContextprovider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Resumo />
          <Vendas />
        </main>
      </div>
    </DataContextprovider>
  );
};

export default App;

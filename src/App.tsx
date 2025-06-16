import React from "react";
import Style from "./Style.css";
import Resumo from "./Pages/Resumo";
import Sidenav from "./Components/Sidenav";
import Header from "./Components/Header";
import { DataContextprovider } from "./Context/DataContext";

const App = () => {
  return (
    <DataContextprovider>
      <div>
        <Sidenav />
        <main>
          <Header />
          <Resumo />
        </main>
      </div>
    </DataContextprovider>
  );
};

export default App;

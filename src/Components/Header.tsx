import React from "react";
import { useData } from "../Context/DataContext";
import DateRange from "./DateRange";
import Meses from "./Meses";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { data } = useData();
  const [title, setTitle] = React.useState("Resumo");

  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Resumo");
      document.title = "Fintech | Resumo";
    } else if (location.pathname === "/vendas") {
      document.title = "Fintech | Vendas";
      setTitle("Vendas");
    }
  }, [location]);

  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />
        <h1 className="box gb-3">{title}</h1>
      </div>
      <Meses />
    </header>
  );
};

export default Header;

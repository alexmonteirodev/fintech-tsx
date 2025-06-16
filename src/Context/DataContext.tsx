import React from "react";
import useFetch from "../Hooks/useFetch";

type IVenda = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "cartao" | "pix";
  parcelas: number | null;
  data: string;
};

type IDataContext = {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
};

const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context) throw new Error("nao envolveu o provider");
  return context;
};

export const DataContextprovider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<IVenda[]>(
    "https://data.origamid.dev/vendas/"
  );
  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IVenda } from "../Context/DataContext";

// const dadosGrafico = [
//   {
//     data: "2023-05-03",
//     pago: 300000,
//     processando: 50000,
//     falha: 60000,
//   },
//   {
//     data: "2023-05-04",
//     pago: 350000,
//     processando: 60000,
//     falha: 30000,
//   },
//   {
//     data: "2023-05-05",
//     pago: 330000,
//     processando: 32000,
//     falha: 44000,
//   },
//   {
//     data: "2023-05-06",
//     pago: 550000,
//     processando: 65000,
//     falha: 23000,
//   },
// ];
type VendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

function transformData(data: IVenda[]): VendaDia[] {
  const dias = data.reduce((acc: { [key: string]: VendaDia }, item) => {
    const dia = item.data.split(" ")[0];
    if (!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }
    acc[dia][item.status] += item.preco;
    return acc;
  }, {});

  return Object.values(dias).map((dia) => ({
    ...dia,
    data: dia.data.substring(5),
  }));
}

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  const transformedData = transformData(data);
  //   console.log(transformedData);
  return (
    <div>
      <ResponsiveContainer width="99%" height={400}>
        <LineChart data={transformedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="data" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pago"
            stroke="#82ca9d"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="processando"
            stroke="#facc15"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="falha"
            stroke="#f87171"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoVendas;

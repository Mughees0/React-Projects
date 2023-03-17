import "./App.css";
import Table from "./component/table/Table";
import Header from "./component/header/Header";
import { useState } from "react";

function App() {
  const customers = [
    {
      name: "Zeta",
      lastSeen: "03/02/2023",
      orders: "5",
      totalSpend: "500.0",
      latestPurchase: "03/12/2023, 4:22:36",
      news: "✕",
      segments: "Regular",
    },
    {
      name: "Smith",
      lastSeen: "03/02/2023",
      orders: "5",
      totalSpend: "500.0",
      latestPurchase: "03/12/2023, 4:22:36",
      news: "✕",
      segments: "Regular",
    },
    {
      name: "Benjamin",
      lastSeen: "14/02/2022",
      orders: "5",
      totalSpend: "500.0",
      latestPurchase: "03/12/2023, 4:22:36",
      news: "✓",
      segments: "Regular",
    },
    {
      name: "Mike",
      lastSeen: "28/08/2021",
      orders: "5",
      totalSpend: "500.0",
      latestPurchase: "03/12/2023, 4:22:36",
      news: "✕",
      segments: "Regular",
    },
    {
      name: "Bella",
      lastSeen: "28/08/2021",
      orders: "5",
      totalSpend: "500.0",
      latestPurchase: "03/12/2023, 4:22:36",
      news: "✕",
      segments: "Regular",
    },
    {
      name: "Jamie",
      lastSeen: "28/08/2021",
      orders: "5",
      totalSpend: "500.0",
      latestPurchase: "03/12/2023, 4:22:36",
      news: "✕",
      segments: "Regular",
    },
    {
      name: "John",
      lastSeen: "28/08/2021",
      orders: "5",
      totalSpend: "500.0",
      latestPurchase: "03/12/2023, 4:22:36",
      news: "✕",
      segments: "Ordered",
    },
    {
      name: "Bobby",
      lastSeen: "28/08/2021",
      orders: "5",
      totalSpend: "500.0",
      latestPurchase: "03/12/2023, 4:22:36",
      news: "✕",
      segments: "Regular",
    },
    {
      name: "Jennifer",
      lastSeen: "28/08/2021",
      orders: "5",
      totalSpend: "500.0",
      latestPurchase: "03/12/2023, 4:22:36",
      news: "✕",
      segments: "Regular",
    },
    {
      name: "Mughees",
      lastSeen: "28/08/2021",
      orders: "5",
      totalSpend: "500.0",
      latestPurchase: "03/12/2023, 4:22:36",
      news: "✕",
      segments: "Regular",
    },
  ];

  const [value, setValue] = useState("");
  return (
    <div className="App">
      <Header value={value} onValChange={setValue} />
      <Table data={customers} filterText={value} />
    </div>
  );
}

export default App;

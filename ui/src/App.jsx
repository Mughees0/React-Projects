import "./App.css";
import Table from "./component/table/Table";
import Header from "./component/header/Header";
import { useState } from "react";

function App() {
  const customers = {
    person: {
      name: "Smith",
      lastSeen: "03/02/2023",
      orders: "5",
      totalSpend: "500.0",
      latestPurchase: "03/12/2023, 4:22:36",
      news: "✕",
      segments: "Regular",
    },
    person2: {
      name: "Benjamin",
      lastSeen: "14/02/2022",
      orders: "5",
      totalSpend: "500.0",
      latestPurchase: "03/12/2023, 4:22:36",
      news: "✓",
      segments: "Regular",
    },
    person3: {
      name: "Mike",
      lastSeen: "28/08/2021",
      orders: "5",
      totalSpend: "500.0",
      latestPurchase: "03/12/2023, 4:22:36",
      news: "✕",
      segments: "Regular",
    },
    person4: {
      name: "Bella",
      lastSeen: "28/08/2021",
      orders: "5",
      totalSpend: "500.0",
      latestPurchase: "03/12/2023, 4:22:36",
      news: "✕",
      segments: "Regular",
    },
    person5: {
      name: "Jamie",
      lastSeen: "28/08/2021",
      orders: "5",
      totalSpend: "500.0",
      latestPurchase: "03/12/2023, 4:22:36",
      news: "✕",
      segments: "Regular",
    },
    person6: {
      name: "John",
      lastSeen: "28/08/2021",
      orders: "5",
      totalSpend: "500.0",
      latestPurchase: "03/12/2023, 4:22:36",
      news: "✕",
      segments: "Ordered",
    },
    person7: {
      name: "Bobby",
      lastSeen: "28/08/2021",
      orders: "5",
      totalSpend: "500.0",
      latestPurchase: "03/12/2023, 4:22:36",
      news: "✕",
      segments: "Regular",
    },
    person8: {
      name: "Jennifer",
      lastSeen: "28/08/2021",
      orders: "5",
      totalSpend: "500.0",
      latestPurchase: "03/12/2023, 4:22:36",
      news: "✕",
      segments: "Regular",
    },
    person9: {
      name: "Mughees",
      lastSeen: "28/08/2021",
      orders: "5",
      totalSpend: "500.0",
      latestPurchase: "03/12/2023, 4:22:36",
      news: "✕",
      segments: "Regular",
    },
  };

  const customer = Object.entries(customers);

  const [value, setValue] = useState("");
  return (
    <div className="App">
      <Header value={value} onValChange={setValue} />
      <Table data={customer} filterText={value} />
    </div>
  );
}

export default App;

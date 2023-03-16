import "./App.css";

import useCountry from "./hook/useCountry";

function App() {
  const [error, data] = useCountry("Finland");

  console.log("Data: ", data);
  console.log("Error: ", error);
  return (
    <div className="App">
      {data.map((d) => (
        <>
          <h1>{d.name.common}</h1>
          <h3>{d.capital}</h3>
        </>
      ))}
    </div>
  );
}

export default App;

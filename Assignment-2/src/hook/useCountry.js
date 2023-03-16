import { useEffect, useState } from "react";

function useCountry(name) {
  const [error, setError] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`).then((res) => {
      if (!res.ok) res.json().then((err) => setError(err.message));
      else res.json().then((resData) => setData(resData));
    });
  }, [name]);
  return [error, data];
}
export default useCountry;

import { useEffect, useState } from "react";

type Country = {
  name: {
    common: string;
    official: string;
    nativeName: {
      eng: {
        official: string;
        common: string;
      };
      urd?: {
        official: string;
        common: string;
      };
    };
  };
  capital: string[];
};

function useCountry(name: string): [null | string, Country[] | []] {
  const [error, setError] = useState<null | string>("");
  const [data, setData] = useState<Country[]>([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital
`).then((res) => {
      if (!res.ok) res.json().then((err) => setError(err.message));
      else res.json().then((resData) => setData(resData));
    });
  }, [name]);
  return [error, data];
}
export default useCountry;

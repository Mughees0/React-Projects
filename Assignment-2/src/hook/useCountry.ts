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
      if (!res.ok) setError(`${res.status}: ${res.statusText}`);
      else res.json().then((resData) => setData(resData));
    });
  }, [name]);
  return [error, data];
}
export default useCountry;
// async function fetching() {
//   try {
//     const req = await fetch(
//       `https://restcountries.com//v3.1/name/${name}?fields=name,capital`
//     );
//     if (!req.ok) {
//       throw req;
//     } else {
//       const res = await req.json();
//       setData(res);
//     }
//   } catch (error: any) {
//     console.log("err", error);
//     setError(`${error.status}: ${error.statusText}`);
//   }
// }
// fetching();

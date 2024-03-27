import { useState, useEffect } from "react";

export const useFetch = (url:string) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async (url:string) => {
      try {
        let res = await fetch(url);

        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          };
        }

        let data = await res.json();

        setIsPending(false);
        setData(data);
        setError(false);
      } catch (err) {
        setIsPending(true);
        setError(true);
      }
    };

    getData(url);
  }, [url]);

  return { data, isPending, error };
};

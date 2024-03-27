import { useState, useEffect } from "react";

export const useFetchPostDel = (url:string, bodypar:string, metodo:string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    console.log(url,bodypar)  
    const requestOptions = 
    {
        method: metodo,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( bodypar )
    };
    const postData = async (url:string) => {
      try {
        let res = await fetch(url , requestOptions);

        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          };
        }

        let data = await res.json();

        setData(data);
        setError(false);
      } catch (err) {
        setError(true);
      }
    };

    postData(url);
  }, [url]);

  return { data, error };
};

import React from "react";
//CUSTOM HOOK to Fetch data
export const useFetch = (url) => {
  const [response, setResponse] = React.useState([]);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${url}`, {
          method: "GET",

          headers: { "Content-Type": "application/json" },
        });
        const json = await res.json();

        setResponse(json.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { data: response, error };
};

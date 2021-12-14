import { useState } from "react";
import { useFetch } from "use-http";
export default function useService() {
  const { get, post, cache, response } = useFetch(
    process.env.REACT_APP_API_URL
  );

  const [data, setData] = useState([]);

  // Realiza una llamada al API
  const api = async ({ resource = "", method = "GET", options = {} }) => {
    if (method === "GET") {
      setData(await get(resource));
    } else {
      setData(await post(resource, options));
    }
  };

  return { api, data, response, cache };
}

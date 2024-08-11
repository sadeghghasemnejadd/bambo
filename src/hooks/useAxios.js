import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = ({ url, method = "get", params, headers, config }) => {
  const [response, setResponse] = useState(undefined);
  const [responseError, setError] = useState("");
  const [getloading, setGetLoading] = useState(true);
  const [updateLoading, setUpdateLoading] = useState(false);

  const fetchData = (data) => {
    return new Promise((resolve, rejects) => {
      axios
        .request({
          method,
          url,
          data,
          params,
          headers,
          ...config,
        })
        .then(resolve)
        .catch(rejects);
    });
  };

  const run = (data) => {
    return new Promise((resolve, reject) => {
      setUpdateLoading(true);
      fetchData(data)
        .then((response) => {
          setResponse(response);
          setGetLoading(false);
          setUpdateLoading(false);
          resolve(response);
        })

        .catch((error) => {
          setGetLoading(false);
          setUpdateLoading(false);
          setError(error);
          reject(error);
        });
    });
  };

  return { response, responseError, getloading, updateLoading, run };
};

export default useAxios;

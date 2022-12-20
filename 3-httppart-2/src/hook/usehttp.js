import { useState, useEffect, useCallback } from "react";

const useHttp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(async (configData, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(configData.url, {
        method: configData.method ? configData.method : "GET",
        body: configData.body ? JSON.stringify(configData.body): null,
        headers: configData.headers ? configData.headers : {}
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      console.log(data)
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    error,
    isLoading,
    sendRequest,
  };
};
export default useHttp;

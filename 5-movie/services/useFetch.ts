import { useEffect, useState } from "react";

const useFetch = <T>(fetchFunction: () => Promise<T>, autoRefetch = true) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchFunction();
      setData(data);
    } catch (error) {
      setError(error instanceof Error ? error : new Error("An error occured"));
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setError(null);
    setLoading(false);
  };

  useEffect(() => {
    if (autoRefetch) fetchData();
  }, [autoRefetch]);

  return { error, loading, data, refetch: fetchData, reset };
};

export default useFetch;

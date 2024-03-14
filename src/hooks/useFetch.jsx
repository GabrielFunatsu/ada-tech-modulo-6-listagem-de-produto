import { useEffect, useState } from "react";
import api from "../api/api";

const useFetch = (query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await api.get(query);
      setData(data);
    } catch (error) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return {
    data,
    loading,
  };
};

export { useFetch };

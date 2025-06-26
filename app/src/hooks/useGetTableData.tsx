import { useEffect, useState } from "react";
import type { IApiResponse, ITableData } from "./types";

export const useGetTableData = () => {
  const [data, setData] = useState<ITableData | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch("api/js_test/api.json");
        const data = (await response.json()) as IApiResponse;

        if (data.success) {
          setData(data.data);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};

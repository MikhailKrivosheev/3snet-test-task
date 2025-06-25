import { useEffect, useState } from "react";
import GridTable from "./Table/GridRealisation";
import NativeTable from "./Table/TableRealisation";
import type { IApiResponse } from "./types";

export default function Table() {
  const [data, setData] = useState<IApiResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("api/js_test/api.json");
        const data = await response.json();
        setData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) return null;

  return (
    <section className="flex flex-col gap-20">
      <GridTable total={data?.total} table={data?.table} />
      <NativeTable total={data?.total} table={data?.table} />
    </section>
  );
}

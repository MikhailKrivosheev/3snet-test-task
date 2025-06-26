import { useGetTableData } from "../../hooks/useGetTableData";
import GridTable from "./Table/GridRealisation";
import NativeTable from "./Table/TableRealisation";

export default function Table() {
  const { data, error, loading } = useGetTableData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Не удалось загрузить данные</div>;
  }

  if (!data) {
    return <div>Данные не найдены</div>;
  }

  return (
    <section className="flex flex-col gap-20">
      <GridTable {...data} />
      <NativeTable {...data} />
    </section>
  );
}

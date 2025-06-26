import type { ITableData } from "../../../Hooks/TableData/types";
import { useActiveMonths } from "../../../store/useActiveMonths";
import { getCurrencyAmount } from "../../../utils/getCurrencyAmount";

export default function NativeTable({ total, table }: ITableData) {
  const { months, getSlicedMonths } = useActiveMonths();

  const currentMonth = new Date().getMonth();

  const hasMoreMonths =
    total && months.length > 0
      ? months[months.length - 1].monthIndex < (total?.length - 1 || 0)
      : false;

  if (!total && !table) return null;

  return (
    <table className="text-text-secondary w-full border-collapse text-sm font-medium">
      <thead>
        <tr>
          <th className="bg-bckg-light text-text-secondary border border-gray-300 p-4 font-medium" />
          <th className="bg-bckg-light text-text-secondary border border-gray-300 p-4 font-medium" />
          {months.map(({ monthIndex, name }) => (
            <th
              key={monthIndex}
              className="bg-bckg-light border border-gray-300 p-4 text-start"
            >
              <div
                className={`mb-2 ${
                  monthIndex + 1 > currentMonth ? "text-secondary-blue" : ""
                }`}
              >
                {name}
              </div>
              <div className="grid grid-cols-2 gap-x-2 gap-y-6">
                <div>Plan</div>
                <div>Fact</div>
              </div>
            </th>
          ))}
          {hasMoreMonths && (
            <th className="bg-bckg-light border border-gray-300 p-4" />
          )}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-secondary-blue border border-gray-300 p-4">
            Manager
          </td>
          <td className="text-secondary-blue border border-gray-300 p-4 text-xs">
            <div>Total income:</div>
            <div className="my-2 border-t border-gray-300" />
            <div>Total active partners:</div>
          </td>
          {getSlicedMonths(total).map(({ plan, fact }, index) => (
            <td
              key={index}
              className={`border border-gray-300 p-4 text-xs ${
                months[index]?.monthIndex + 1 > currentMonth
                  ? "text-black"
                  : "text-text-secondary"
              }`}
            >
              <div className="grid grid-cols-2 gap-x-2 gap-y-6">
                <span>{getCurrencyAmount(plan.income)}</span>
                <span>{getCurrencyAmount(fact.income)}</span>
                <span>{plan.activePartners}</span>
                <span>{fact.activePartners}</span>
              </div>
            </td>
          ))}
          {hasMoreMonths && (
            <td className="border border-gray-300 p-4 text-center">...</td>
          )}
        </tr>
        {table.map(({ adminId, adminName, months: userMonths }, adminIndex) => (
          <tr key={`admin-${adminId}-${adminIndex}`}>
            <td className="text-bckg-blue border border-gray-300 p-4 text-base">
              {adminName}
            </td>
            <td className="relative border border-gray-300 p-4 text-xs">
              <div>Total income:</div>
              <div className="my-2 border-t border-gray-300" />
              <div>Total active partners:</div>
            </td>
            {getSlicedMonths(userMonths).map((userMonth, monthIndex) => {
              const isFuture =
                months[monthIndex]?.monthIndex + 1 > currentMonth;

              if (userMonth === null) {
                return (
                  <td
                    key={`admin-${adminId}-month-${monthIndex}-no-data`}
                    className="text-text-secondary border border-gray-300 p-4 text-center text-xs"
                  >
                    No data
                  </td>
                );
              }

              return (
                <td
                  key={`admin-${adminId}-month-${monthIndex}`}
                  className={`border border-gray-300 p-4 text-xs ${isFuture ? "text-black" : "text-text-secondary"}`}
                >
                  <div className="grid grid-cols-2 gap-x-2 gap-y-6">
                    <span>{getCurrencyAmount(userMonth.plan.income ?? 0)}</span>
                    <span>{getCurrencyAmount(userMonth.fact.income ?? 0)}</span>
                    <span>{userMonth.plan.activePartners}</span>
                    <span>{userMonth.fact.activePartners}</span>
                  </div>
                </td>
              );
            })}
            {hasMoreMonths && (
              <td className="border border-gray-300 p-4 text-center">...</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

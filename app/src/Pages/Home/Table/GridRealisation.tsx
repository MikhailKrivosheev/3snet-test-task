import cn from "classnames";
import type { ITableData } from "../../../Hooks/TableData/types";
import { useActiveMonths } from "../../../store/useActiveMonths";
import { getCurrencyAmount } from "../../../utils/getCurrencyAmount";
import type { ITableCellProps } from "./types";

const Cell = ({
  children,
  className,
  isIndependent = false,
  isActiveMonth = false,
}: ITableCellProps) => {
  const cellClasses = cn("cell-table", className, {
    "cell-table--independent": isIndependent,
    "cell-table--active-month": isActiveMonth,
  });

  return <div className={cellClasses}>{children}</div>;
};

export default function GridTable({ total, table }: ITableData) {
  const { months, getSlicedMonths } = useActiveMonths();

  const currentMonth = new Date().getMonth();

  const hasMoreMonths =
    total && months.length > 0
      ? months[months.length - 1].monthIndex < (total?.length - 1 || 0)
      : false;

  if (!total && !table) return null;

  return (
    <div className="grid-table">
      <div className="row-table">
        <Cell className="bg-bckg-light" />
        <Cell className="bg-bckg-light" />
        {months.map(({ monthIndex, name }) => (
          <Cell key={monthIndex} className="bg-bckg-light text-sm">
            <span
              className={`col-span-2 row-1 ${monthIndex + 1 > currentMonth ? "text-secondary-blue" : ""}`}
            >
              {name}
            </span>
            <div className="cell-points">
              <span>Plan</span>
              <span>Fact</span>
            </div>
          </Cell>
        ))}
        {hasMoreMonths && <Cell className="bg-bckg-light" />}
      </div>
      <div className="row-table">
        <Cell isIndependent className="text-secondary-blue text-sm">
          Manager
        </Cell>
        <Cell className="text-secondary-blue relative flex flex-col gap-x-5 gap-y-8 text-xs">
          <span>Total income:</span>
          <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-gray-300 text-xs" />
          <span>Total active partners:</span>
        </Cell>
        {getSlicedMonths(total).map(({ plan, fact }, index) => (
          <Cell
            key={index}
            isActiveMonth={
              months[index] && months[index].monthIndex + 1 > currentMonth
            }
            className="gap-y-8 text-xs"
          >
            <span>{getCurrencyAmount(plan.income)}</span>
            <span>{getCurrencyAmount(fact.income)}</span>
            <span>{plan.activePartners}</span>
            <span>{fact.activePartners}</span>
          </Cell>
        ))}
        {hasMoreMonths && <Cell isIndependent>...</Cell>}
      </div>
      {table.map(({ adminId, adminName, months: userMonths }, adminIndex) => (
        <div key={`admin-${adminId}-${adminIndex}`} className="row-table">
          <Cell isIndependent className="text-bckg-blue text-base">
            {adminName}
          </Cell>
          <Cell className="relative flex flex-col gap-x-5 gap-y-8 text-xs">
            <span>Total income:</span>
            <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-gray-300 text-xs" />
            <span>Total active partners:</span>
          </Cell>
          {getSlicedMonths(userMonths).map((userMonth, monthIndex) =>
            userMonth === null ? (
              <Cell
                key={`admin-${adminId}-month-${monthIndex}-no-data`}
                isIndependent
                className="text-text-secondary text-xs"
              >
                No data
              </Cell>
            ) : (
              <Cell
                key={`admin-${adminId}-month-${monthIndex}`}
                isActiveMonth={
                  months[monthIndex] &&
                  months[monthIndex].monthIndex + 1 > currentMonth
                }
                className="gap-y-8 text-xs"
              >
                <span>{getCurrencyAmount(userMonth?.plan.income ?? 0)}</span>
                <span>{getCurrencyAmount(userMonth?.fact.income ?? 0)}</span>
                <span>{userMonth?.plan.activePartners}</span>
                <span>{userMonth?.fact.activePartners}</span>
              </Cell>
            ),
          )}
          {hasMoreMonths && <Cell isIndependent>...</Cell>}
        </div>
      ))}
    </div>
  );
}

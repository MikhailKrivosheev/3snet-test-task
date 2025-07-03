/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";
import type { ITableData } from "../../../../Hooks/TableData/types";
import { MONTHS, useActiveMonths } from "../../../../store/useActiveMonths";
import { getCurrencyAmount } from "../../../../utils/getCurrencyAmount";
import Cell from "./Cell";
import { tv } from "tailwind-variants";

export default function GridTable({ total, table }: ITableData) {
  const { months, getSlicedMonths } = useActiveMonths();

  const columnsCount = useMemo(() => months.length + 2, []);

  const currentMonth = new Date().getMonth();

  const hasMoreMonths = total
    ? MONTHS.indexOf(months[months.length - 1]) < (total?.length - 1 || 0)
    : false;

  if (!total && !table) return null;

  return (
    <div
      className="grid h-full w-full"
      style={{
        gridTemplateColumns: `repeat(${columnsCount}, minmax(0, 1fr)) 50px`,
      }}
    >
      <div className={rowTableClasses()}>
        <Cell className="bg-bckg-light" />
        <Cell className="bg-bckg-light" />
        {months.map((month) => (
          <Cell key={MONTHS.indexOf(month)} className="bg-bckg-light text-sm">
            <span
              className={`col-span-2 row-1 ${MONTHS.indexOf(month) + 1 > currentMonth ? "text-secondary-blue" : ""}`}
            >
              {month}
            </span>
            <div className="col-span-full grid grid-cols-[subgrid] text-xs font-normal">
              <span>Plan</span>
              <span>Fact</span>
            </div>
          </Cell>
        ))}
        {hasMoreMonths && <Cell className="bg-bckg-light" />}
      </div>
      <div className={rowTableClasses()}>
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
            isActiveMonth={MONTHS.indexOf(months[index]) + 1 > currentMonth}
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
        <div key={`admin-${adminId}-${adminIndex}`} className={rowTableClasses()}>
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
                  MONTHS.indexOf(months[monthIndex]) + 1 > currentMonth
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

const rowTableClasses = tv({
  base: "grid grid-cols-[subgrid] col-span-full",
});
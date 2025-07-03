import { create } from "zustand/index";
import type { TWithPlanAndFact } from "../Hooks/TableData/types";

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

type Months = (typeof MONTHS)[number][];
export interface IActiveTabStore {
  months: Months;
  setActiveMonths(months: (typeof MONTHS)[number][]): void;
  navigateMonths(direction: "next" | "prev"): void;
  getSlicedMonths(monthsData: TWithPlanAndFact[]): TWithPlanAndFact[];
}

/**
 * Возвращает массив из `count` месяцев, начиная с текущего месяца.
 * 
 * 1. Если весь диапазон месяцев помещается в пределах текущего года,
 *    возвращаются месяцы от текущего до (currentMonth + count - 1).
 *
 * 2. Если диапазон выходит за пределы декабря,
 *    возвращаются последние `count` месяцев года.
 */
const getInitialMonths = (count: number): Months => {
  const currentMonth = new Date().getMonth();

  if (currentMonth + (count - 1) > 11) {
    return Array.from({ length: count }, (_, i) => {
      const monthIndex = 11 - (count - 1) + i;
      return MONTHS[monthIndex];
    });
  }

  return Array.from({ length: count }, (_, i) => {
    const monthIndex = currentMonth + i;
    return MONTHS[monthIndex];
  });
};

const getNextMonths = (start: number, count: number): Months => {
  return Array.from({ length: count }, (_, i) => {
    const monthIndex = start + i;
    return MONTHS[monthIndex];
  });
};

export const useActiveMonths = create<IActiveTabStore>((set, get) => ({
  months: getInitialMonths(6),

  setActiveMonths: (months) => set({ months }),

  navigateMonths: (direction: "next" | "prev") => {
    const { months } = get();
    const first = MONTHS.indexOf(months[0]);

    let newStart: number;

    if (direction === "next") {
      newStart = first + 1;
      if (newStart + (months.length - 1) > 11) return;
    } else {
      newStart = first - 1;
      if (newStart < 0) return;
    }

    const newMonths = getNextMonths(newStart, months.length);
    set({ months: newMonths });
  },

  getSlicedMonths: (monthsData: TWithPlanAndFact[]) => {
    const { months } = get();
    return monthsData.slice(
      MONTHS.indexOf(months[0]),
      MONTHS.indexOf(months[months.length - 1]) + 1,
    );
  },
}));

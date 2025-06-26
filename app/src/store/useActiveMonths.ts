import { create } from "zustand/index";
import type { TWithPlanAndFact } from "../hooks/types";

const MONTHS = [
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

export interface MonthEntry {
  monthIndex: number;
  name: typeof MONTHS[number];
}

export interface IActiveTabStore {
  months: MonthEntry[];
  setActiveMonths(months: MonthEntry[]): void;
  navigateMonths(direction: "next" | "prev"): void;
  getSlicedMonths(monthsData: TWithPlanAndFact[]): TWithPlanAndFact[];
}

const getNextMonths = (start: number, count: number): MonthEntry[] => {
  return Array.from({ length: count }, (_, i) => {
    const monthIndex = (start + i) % 12;
    return {
      monthIndex,
      name: MONTHS[monthIndex],
    };
  });
};

export const useActiveMonths = create<IActiveTabStore>((set, get) => ({
  months: getNextMonths(new Date().getMonth(), 6),

  setActiveMonths: (months) => set(() => ({ months })),

  navigateMonths: (direction: "next" | "prev") => {
    const { months } = get();
    const first = months[0].monthIndex;

    let newStart: number;

    if (direction === "next") {
      newStart = first + 1;
      if (newStart + 5 > 11) return;
    } else {
      newStart = first - 1;
      if (newStart < 0) return;
    }

    set({ months: getNextMonths(newStart, 6) });
  },

  getSlicedMonths: (monthsData: TWithPlanAndFact[]) => {
    const { months } = get();
    return monthsData.slice(
      months[0].monthIndex,
      months[months.length - 1].monthIndex + 1,
    );
  },
}));

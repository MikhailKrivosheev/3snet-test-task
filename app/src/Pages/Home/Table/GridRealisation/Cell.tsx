import { tv } from "tailwind-variants";
import type { ITableCellProps } from "../types";

export default function Cell({
  children,
  className,
  isIndependent = false,
  isActiveMonth = false,
}: ITableCellProps) {

  return (
    <div
      className={cellClasses({
        isIndependent,
        isActiveMonth,
        class: className,
      })}
    >
      {children}
    </div>
  );
}

const cellClasses = tv({
  base: [
    "border border-gray-300 border-l-0 first:border-l p-4 text-text-secondary font-medium",
    "grid col-span-1 gap-y-3 gap-x-1.5",
    "[grid-template-columns:repeat(2,1fr)]",
    "[grid-template-rows:repeat(2,1fr)]",
  ],
  variants: {
    isIndependent: {
      true: "flex items-center justify-center",
    },
    isActiveMonth: {
      true: "text-black",
    },
  },
  defaultVariants: {
    isIndependent: false,
    isActiveMonth: false,
  },
});

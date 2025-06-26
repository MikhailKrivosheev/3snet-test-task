import type { IApiResponse } from "../../../hooks/types";

export type ITableProps = IApiResponse;

export interface ITableCellProps {
  children?: React.ReactNode;
  className?: string;
  isIndependent?: boolean;
  isActiveMonth?: boolean;
}

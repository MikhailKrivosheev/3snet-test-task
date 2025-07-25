type TPlanFact = {
  income: number;
  activePartners: number;
};

export type TWithPlanAndFact<T = TPlanFact> = {
  plan: T;
  fact: T;
};

type IMonthData = TPlanFact & TWithPlanAndFact;

export interface ITableRow {
  id: number;
  adminId: number;
  adminName: string;
  months: IMonthData[];
  year: number;
}

export interface ITableData {
  total: TWithPlanAndFact[];
  table: ITableRow[];
}

export interface IApiResponse {
  success: boolean;
  data: ITableData;
}

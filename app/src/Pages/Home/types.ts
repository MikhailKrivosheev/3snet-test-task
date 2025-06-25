interface IPlanFact {
  income: number;
  activePartners: number;
}

interface IMonthData {
  income: number;
  activePartners: number;
  plan: IPlanFact;
  fact: IPlanFact;
}

export interface ITableRow {
  id: number;
  adminId: number;
  adminName: string;
  months: IMonthData[];
  year: number;
}

export interface ITotalData {
  plan: IPlanFact;
  fact: IPlanFact;
}

export interface IApiResponse {
  total: ITotalData[];
  table: ITableRow[];
}

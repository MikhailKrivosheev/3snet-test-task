import type { IActiveTabStore } from "../../store/useActiveTab";

// type TTitle = Pick<IActiveTabStore, "activeTab">["activeTab"];

export interface ISubNavigationItems {
  id: number;
  title: IActiveTabStore["activeTab"];
  href: string;
}

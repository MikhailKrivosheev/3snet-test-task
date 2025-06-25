import { create } from "zustand/index";

export interface IActiveTabStore {
  activeTab:
    | "dashboard"
    | "statistics"
    | "offers"
    | "advertisers"
    | "partners"
    | "tickets"
    | "billing"
    | "tasks"
    | "news"
    | "settings";
  setActiveTab(tab: IActiveTabStore["activeTab"]): void;
}

export const useActiveTab = create<IActiveTabStore>((set) => ({
  activeTab: "settings",
  setActiveTab: (tab) =>
    set(() => ({
      activeTab: tab,
    })),
}));

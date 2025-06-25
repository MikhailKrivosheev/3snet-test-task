import cn from "classnames";
import { Link } from "react-router-dom";
import { useActiveTab } from "../../store/useActiveTab";
import type { ISubNavigationItems } from "./types";

const SUB_NAVIGATION_ITEMS: ISubNavigationItems[] = [
  {
    id: 1,
    title: "dashboard",
    href: "/",
  },
  {
    id: 2,
    title: "statistics",
    href: "/",
  },
  {
    id: 3,
    title: "offers",
    href: "/",
  },
  {
    id: 4,
    title: "advertisers",
    href: "/",
  },
  {
    id: 5,
    title: "partners",
    href: "/",
  },
  {
    id: 6,
    title: "tickets",
    href: "/",
  },
  {
    id: 7,
    title: "billing",
    href: "/",
  },
  {
    id: 8,
    title: "tasks",
    href: "/",
  },
  {
    id: 9,
    title: "news",
    href: "/",
  },
  {
    id: 10,
    title: "settings",
    href: "/",
  },
];

export default function SubNavigation() {
  const { activeTab, setActiveTab } = useActiveTab();

  const getTabClasses = (tab: string) => {
    return cn("link", {
      "tab-border": activeTab === tab,
    });
  };

  return (
    <nav className="h-sub-nav p-header text-bckg-blue w-full border-b border-gray-300 font-medium uppercase">
      <ul className="flex justify-between">
        {SUB_NAVIGATION_ITEMS.map((item) => (
          <li key={item.id}>
            <Link
              to={item.href}
              className={getTabClasses(item.title)}
              onClick={() => setActiveTab(item.title)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

import { Link } from "react-router-dom";
import { tv } from "tailwind-variants";
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

  return (
    <nav className="h-sub-nav p-header text-bckg-blue w-full border-b border-gray-300 font-medium uppercase">
      <ul className="flex justify-between">
        {SUB_NAVIGATION_ITEMS.map((item) => (
          <li key={item.id}>
            <Link
              to={item.href}
              className={tabClasses({ active: activeTab === item.title })}
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

const tabClasses = tv({
  base: [
    "relative",

    "after:absolute after:content-[''] after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2",
    "after:bottom-[calc(var(--padding-y-header)*-1)] after:w-[140%] after:h-[2px]",
    "after:bg-accent-cyan after:opacity-0 after:transition-opacity",
  ],
  variants: {
    active: {
      true: "after:opacity-100",
    },
  },
});

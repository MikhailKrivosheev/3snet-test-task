import { tv } from "tailwind-variants";
import { Button } from "../UI/Button";
import { BellIcon } from "./BellIcon";

export default function UserSettings() {
  return (
    <div className="flex items-center gap-15">
      <Button className={arrowClasses()} variant="simplified">
        $ 500
      </Button>
      <Button className="gap-2">
        <BellIcon className="text-accent-cyan" size={16} />
        <span>8</span>
      </Button>
      <Button className={arrowClasses()}>profile@mail.ru</Button>
      <Button className={`${arrowClasses()} gap-2`}>
        <img
          src="/flag-en.png"
          alt="lang-flag"
          className="h-8 w-8 rounded-full"
        />
        <span>ENG</span>
      </Button>
    </div>
  );
}

const arrowClasses = tv({
  base: [
    "relative cursor-pointer pr-2.5",

    "before:absolute before:content-[''] before:right-0 before:top-1/2",
    "before:-translate-y-1/2 before:-rotate-45 before:transition-transform",
    "before:w-px before:h-[5px]",
    "before:bg-secondary-blue before:border before:border-secondary-blue",
    "hover:before:rotate-45",

    "after:absolute after:content-[''] after:right-[-3px] after:top-1/2",
    "after:-translate-y-1/2 after:rotate-45 after:transition-transform",
    "after:w-px after:h-[5px]",
    "after:bg-secondary-blue after:border after:border-secondary-blue",
    "hover:after:-rotate-45",
  ],
});

import { Button } from "../UI/Button";
import { BellIcon } from "./BellIcon";

export default function UserSettings() {
  return (
    <div className="flex items-center gap-15">
      <Button className="disclosure-arrow" variant="simplified">
        $ 500
      </Button>
      <Button className="gap-2">
        <BellIcon className="text-accent-cyan" size={16} />
        <span>8</span>
      </Button>
      <Button className="disclosure-arrow">profile@mail.ru</Button>
      <Button className="disclosure-arrow gap-2">
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

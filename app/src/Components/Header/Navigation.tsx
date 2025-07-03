import { Link } from "react-router-dom";
import { tv } from "tailwind-variants";

export default function Navigation() {
  return (
    <nav className="flex items-center gap-18">
      <Link to="/" className="flex items-center gap-5">
        <span className="font-logo text-accent-cyan text-5xl font-bold">
          3S
        </span>
        <span className={cpaNetwork()}>
          CPA
          <br />
          NETWORK
        </span>
      </Link>
      <ul className="flex gap-10">
        <li>
          <Link to="/" className={link()}>
            Payment systems
          </Link>
        </li>
        <li>
          <Link to="/" className={link()}>
            Referrals
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const cpaNetwork = tv({
  base: [
    "relative text-secondary-blue h-fit text-[10px] leading-tight",

    "before:absolute before:content-[''] before:left-[-10px]",
    "before:top-1/2 before:-translate-y-1/2 before:w-px before:h-[150%]",
    "before:bg-secondary-blue before:border before:border-secondary-blue",
  ],
});

const link = tv({
  base: [
    "transition-colors relative text-lg uppercase",
    "hover:text-accent-cyan",
  ],
});

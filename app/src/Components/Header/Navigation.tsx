import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="flex items-center gap-18">
      <Link to="/" className="flex items-center gap-5">
        <span className="font-logo text-accent-cyan text-5xl font-bold">
          3S
        </span>
        <span className="cpa-network text-secondary-blue h-fit text-[10px] leading-tight">
          CPA
          <br />
          NETWORK
        </span>
      </Link>
      <ul className="flex gap-10">
        <li>
          <Link to="/" className="link text-lg uppercase">
            Payment systems
          </Link>
        </li>
        <li>
          <Link to="/" className="link text-lg uppercase">
            Referrals
          </Link>
        </li>
      </ul>
    </nav>
  );
}

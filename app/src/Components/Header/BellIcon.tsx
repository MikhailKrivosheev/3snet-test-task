interface BellIconProps {
  className?: string;
  size?: number;
}

export const BellIcon = ({ className = "", size = 24 }: BellIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2C13.1 2 14 2.9 14 4C14 4.74 13.6 5.39 13 5.73V7C16.3 7.11 19 9.83 19 13.2V16L21 18V19H3V18L5 16V13.2C5 9.83 7.7 7.11 11 7V5.73C10.4 5.39 10 4.74 10 4C10 2.9 10.9 2 12 2Z"
        fill="currentColor"
      />
      <path
        d="M10 21C10 22.1 10.9 23 12 23C13.1 23 14 22.1 14 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

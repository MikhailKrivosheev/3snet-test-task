import cn from "classnames";
import type { IButton } from "./types";

const buttonVariants = {
  simplified: "button--simplified",
};

const buttonSizes = {
  md: "px-4 py-2 text-base",
};

export const Button = ({
  children,
  type = "button",
  variant = "simplified",
  size = "md",
  className,
  ...props
}: IButton) => {
  const buttonClassNames = cn(
    "button",
    buttonVariants[variant],
    buttonSizes[size],
    className,
  );

  return (
    <button type={type} {...props} className={buttonClassNames}>
      {children}
    </button>
  );
};

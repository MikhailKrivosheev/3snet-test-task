import { tv } from "tailwind-variants";
import type { IButton } from "./types";

export const Button = ({
  children,
  type = "button",
  variant = "simplified",
  size = "md",
  disabled,
  className,
  ...props
}: IButton) => {
  return (
    <button
      type={type}
      disabled={disabled}
      {...props}
      className={buttonClasses({ variant, size, disabled, class: className })}
    >
      {children}
    </button>
  );
};

const buttonClasses = tv({
  base: "inline-flex items-center justify-center font-medium cursor-pointer transition-colors rounded hover:text-accent-cyan",
  variants: {
    variant: {
      primary: "bg-blue-500 hover:bg-blue-600 text-white",
      secondary: "bg-gray-500 hover:bg-gray-600 text-white",
      simplified: "",
    },
    size: {
      md: "px-4 py-2 text-base",
      sm: "px-3 py-1.5 text-sm",
      lg: "px-5 py-3 text-lg",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "simplified",
    size: "md",
  },
});

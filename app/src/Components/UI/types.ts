import type { ReactNode } from "react";

export interface IButton {
  children?: ReactNode;
  variant?: "simplified";
  size?: "md";
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

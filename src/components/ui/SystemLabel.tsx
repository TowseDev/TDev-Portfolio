import { type ReactNode } from "react";

type SystemLabelProps = {
  children: ReactNode;
  className?: string;
};

export function SystemLabel({ children, className = "" }: SystemLabelProps) {
  return (
    <p className={`system-label ${className}`.trim()}>{children}</p>
  );
}

import { type ReactNode } from "react";

type InterfacePanelProps = {
  children: ReactNode;
  className?: string;
};

export function InterfacePanel({ children, className = "" }: InterfacePanelProps) {
  return (
    <div className={`interface-panel ${className}`.trim()}>{children}</div>
  );
}

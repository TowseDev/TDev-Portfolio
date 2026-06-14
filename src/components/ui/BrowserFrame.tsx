import { type ReactNode } from "react";

type BrowserFrameProps = {
  children: ReactNode;
  url?: string;
  className?: string;
};

export function BrowserFrame({
  children,
  url = "engineroomcoach.com",
  className = "",
}: BrowserFrameProps) {
  return (
    <div
      className={`overflow-hidden border border-white/10 bg-[#0c0c10] shadow-[0_32px_80px_rgba(0,0,0,0.5)] ${className}`.trim()}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 flex-1 truncate border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-xs text-muted">
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
  type ReactNode,
} from "react";

type NavLink = {
  href: string;
  label: string;
};

type MobileNavContextValue = {
  isOpen: boolean;
  panelId: string;
  toggle: () => void;
  close: () => void;
};

const MobileNavContext = createContext<MobileNavContextValue | null>(null);

function useMobileNav() {
  const context = useContext(MobileNavContext);

  if (!context) {
    throw new Error("MobileNav components must be used within MobileNav");
  }

  return context;
}

type MobileNavProps = {
  navLinks: NavLink[];
  children: ReactNode;
};

export function MobileNav({ navLinks, children }: MobileNavProps) {
  const [openPath, setOpenPath] = useState<string | null>(null);
  const panelId = useId();
  const pathname = usePathname();
  const isOpen = openPath === pathname;

  const close = useCallback(() => setOpenPath(null), []);
  const toggle = useCallback(
    () => setOpenPath((current) => (current === pathname ? null : pathname)),
    [pathname],
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <MobileNavContext.Provider
      value={{ isOpen, panelId, toggle, close }}
    >
      {children}

      {isOpen ? (
        <button
          type="button"
          className="mobile-nav-overlay is-active"
          aria-hidden="true"
          tabIndex={-1}
          onClick={close}
        />
      ) : null}

      {isOpen ? (
        <nav
          id={panelId}
          className="mobile-nav-panel"
          aria-label="Mobile navigation"
        >
          <ul className="mobile-nav-list">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={close}
                >
                  <span className="mobile-nav-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mobile-nav-label">{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className="mobile-nav-cta" onClick={close}>
            Book a call
          </Link>
        </nav>
      ) : null}
    </MobileNavContext.Provider>
  );
}

export function MobileNavToggle() {
  const { isOpen, panelId, toggle } = useMobileNav();

  return (
    <button
      type="button"
      className="nav-menu-toggle"
      aria-expanded={isOpen}
      aria-controls={panelId}
      onClick={toggle}
    >
      {isOpen ? "Close" : "Menu"}
    </button>
  );
}

import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "solid" | "line";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
};

type ButtonLinkProps = ButtonBaseProps & {
  href: string;
  type?: never;
};

type ButtonElementProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = ButtonLinkProps | ButtonElementProps;

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path
        d="M2 6.5h9M7 2.5l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function buttonClassName(variant: ButtonVariant, className = "") {
  return `btn btn-${variant} ${className}`.trim();
}

function isExternalHref(href: string) {
  return (
    href.startsWith("mailto:") ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("tel:")
  );
}

export function Button({
  variant = "solid",
  href,
  children,
  className = "",
  showArrow = false,
  ...props
}: ButtonProps) {
  const content = (
    <>
      {children}
      {showArrow ? <ArrowIcon /> : null}
    </>
  );

  if (href) {
    const classes = buttonClassName(variant, className);

    if (isExternalHref(href)) {
      return (
        <a href={href} className={classes}>
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={buttonClassName(variant, className)}
      {...props}
    >
      {content}
    </button>
  );
}

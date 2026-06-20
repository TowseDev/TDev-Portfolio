export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tdevdigital.com";

export const SITE_NAME = "TDev Digital";

export const SITE_ALTERNATE_NAME = "Towse Digital Development";

export const SITE_EMAIL = "contact@towseddev.com";

export const SITE_DESCRIPTION =
  "UK digital studio building websites, custom web apps, marketing systems and AI search visibility for small businesses.";

export const SITE_TAGLINE =
  "Websites, web apps and digital systems for small businesses.";

export const PRIMARY_SERVICES = [
  "Website Design & Development",
  "Custom Web Apps",
  "Digital Marketing Systems",
  "AI Search Visibility",
  "Digital Infrastructure & Support",
] as const;

export function absoluteUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}

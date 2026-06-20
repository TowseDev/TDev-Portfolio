import type { Metadata } from "next";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  image,
}: PageMetadataOptions): Metadata {
  const pageTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  const canonical = absoluteUrl(path);
  const imageUrl = image ? absoluteUrl(image) : undefined;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: pageTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_GB",
      type: "website",
      ...(imageUrl ? { images: [{ url: imageUrl }] } : {}),
    },
  };
}

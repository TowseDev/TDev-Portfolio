import {
  PRIMARY_SERVICES,
  SITE_ALTERNATE_NAME,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  absoluteUrl,
} from "@/lib/site";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const SERVICE_DESCRIPTIONS: Record<(typeof PRIMARY_SERVICES)[number], string> =
  {
    "Website Design & Development":
      "Modern business websites built around structure, content, SEO foundations and clear enquiry journeys.",
    "Custom Web Apps":
      "Custom portals, dashboards, calculators and tools built around practical business workflows.",
    "Digital Marketing Systems":
      "SEO foundations, analytics, campaign pages and tracking systems that help businesses generate better enquiries.",
    "AI Search Visibility":
      "Structured content, technical signals and trust-building work designed to help businesses become easier to understand and reference across AI-assisted search.",
    "Digital Infrastructure & Support":
      "Technical setup and support for domains, hosting, email, forms, payments, analytics and ongoing website maintenance.",
  };

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: SITE_ALTERNATE_NAME,
    url: SITE_URL,
    email: SITE_EMAIL,
    description: SITE_DESCRIPTION,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_TAGLINE,
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    serviceType: [...PRIMARY_SERVICES],
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    email: SITE_EMAIL,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchemas() {
  return PRIMARY_SERVICES.map((serviceName) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: SERVICE_DESCRIPTIONS[serviceName],
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
  }));
}

type CaseStudySchemaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function caseStudySchema({
  title,
  description,
  path,
  image,
}: CaseStudySchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    url: absoluteUrl(path),
    ...(image ? { image: absoluteUrl(image) } : {}),
    creator: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function globalSchemas() {
  return [organizationSchema(), websiteSchema(), professionalServiceSchema()];
}

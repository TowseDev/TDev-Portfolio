// Temporary local data source. This structure is intentionally CMS-ready for a future Sanity migration.

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  business: string;
  role?: string;
  projectType?: string;
  relatedProjectSlug?: string;
  approvedForUse: boolean;
  displayOrder: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "alchemy-ferns-mark-taylor",
    quote:
      "Having engaged Towse Digital Development to complete a full website makeover and upgrade, we found them to be honest and accurate in their appraisal. They completed a thorough and professional job, adding a number of bespoke elements where required. We found them knowledgeable, approachable and efficient throughout, and would happily recommend their services.",
    name: "Mark Taylor",
    business: "Alchemy Ferns",
    projectType: "Ecommerce website",
    relatedProjectSlug: "alchemy-ferns",
    approvedForUse: true,
    displayOrder: 1,
  },
  {
    id: "stay-at-filey-victoria",
    quote:
      "TDev Digital took the time to understand what we needed and delivered a website that represents the cottages clearly and professionally. The process was straightforward, good value for money and focused on what would actually help guests find the right information and enquire with confidence.",
    name: "Victoria",
    business: "Stay At Filey",
    projectType: "Holiday cottage website",
    relatedProjectSlug: "stay-at-filey",
    approvedForUse: true,
    displayOrder: 2,
  },
  {
    id: "engine-room-coach-zak",
    quote:
      "The technical quality of the work was excellent. The platform was built with clean code, clear structure and strong documentation, making it easy to understand, maintain and continue developing. TDev Digital showed real technical skill and delivered a high-quality foundation for the product.",
    name: "Zak",
    business: "Engine Room Coach",
    projectType: "Coaching software platform",
    relatedProjectSlug: "engine-room-coach",
    approvedForUse: true,
    displayOrder: 3,
  },
];

export function getApprovedTestimonials(): Testimonial[] {
  return testimonials
    .filter((testimonial) => testimonial.approvedForUse)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

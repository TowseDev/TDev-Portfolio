// Temporary local data source. This structure is intentionally CMS-ready for a future Sanity migration.

export type ProjectTestimonial = {
  quote: string;
  name: string;
  business: string;
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  category: string;
  sector?: string;
  projectType?: string;
  services?: string[];
  stack?: string[];
  summary: string;
  featuredImage?: string;
  galleryImages?: string[];
  liveUrl?: string;
  featured?: boolean;
  displayOrder: number;
  overview?: string;
  problem?: string;
  whatWeBuilt?: string;
  whatWeBuiltItems?: string[];
  technicalApproach?: string;
  outcome?: string;
  keyPoints?: string[];
  testimonial?: ProjectTestimonial;
};

export const projects: Project[] = [
  {
    id: "engine-room-coach",
    slug: "engine-room-coach",
    title: "Engine Room Coach",
    category: "SaaS / Coaching Platform",
    projectType: "Coaching software platform",
    sector: "Coaching / SaaS",
    summary:
      "A coaching platform concept built to help coaches create, manage and deliver structured group programmes with less manual work.",
    overview:
      "Engine Room Coach is a coaching platform concept built to help coaches create, manage and deliver structured group programmes with less manual work.\n\nThe project centred on turning a coaching workflow into a usable digital product: clear onboarding, programme generation, client-facing outputs and a system that could support future development without becoming messy or difficult to maintain.",
    problem:
      "Coaches often rely on a mix of spreadsheets, documents, messages and repeated manual planning. That works early on, but it becomes harder to manage as more clients join, especially when group programmes need structure, consistency and personalisation.\n\nEngine Room Coach needed a product foundation that could turn a coaching method into a more scalable digital system.",
    whatWeBuilt:
      "We designed and developed a modern web app foundation for generating structured coaching plans and managing programme logic.\n\nThe build included:",
    whatWeBuiltItems: [
      "A focused product structure for the first usable version",
      "A clean interface for creating coaching plans",
      "AI-assisted plan generation",
      "Structured outputs that could be exported and shared",
      "A responsive web app interface",
      "Clear code organisation for future development",
      "Technical documentation to support ongoing work",
    ],
    technicalApproach:
      "The platform was built with a focus on maintainability. The codebase was structured so future features could be added without rebuilding the product from scratch.\n\nThe early product was kept intentionally focused: build the useful version first, prove the workflow, then leave room for the platform to expand into client management, dashboards, programme tracking and more advanced coaching tools.",
    outcome:
      "Engine Room Coach now has a strong technical foundation for a coaching software product. The build provides a clear starting point for testing the offer, improving the workflow and developing the platform further as the business model evolves.",
    testimonial: {
      quote:
        "The technical quality of the work was excellent. The platform was built with clean code, clear structure and strong documentation, making it easy to understand, maintain and continue developing. TDev Digital showed real technical skill and delivered a high-quality foundation for the product.",
      name: "Zak",
      business: "Engine Room Coach",
    },
    keyPoints: [
      "Product-led web app build",
      "AI-assisted coaching workflow",
      "Clean technical structure",
      "Documentation for future development",
      "Designed to support scalable group coaching",
    ],
    services: [
      "Product planning",
      "Web app development",
      "AI-assisted workflows",
      "UI design",
      "Technical documentation",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "OpenAI integration"],
    featuredImage: "/projects/engineroomcoach-preview.png",
    featured: true,
    displayOrder: 1,
  },
  {
    id: "give2gets-project-planning",
    slug: "give2gets-project-planning",
    title: "Give2Gets Project Planning",
    category: "Consultancy Website",
    projectType: "Consultancy website",
    sector: "Infrastructure, rail, energy and construction",
    summary:
      "A professional consultancy website built to explain specialist planning, tender support and forensic analysis services with clarity.",
    overview:
      "Give2Gets Project Planning needed a professional website that could clearly explain a specialist consultancy offer across tender support, programme delivery and forensic planning.\n\nThe business operates in technical sectors where credibility, clarity and experience matter. The website needed to feel professional without becoming overcomplicated or difficult to manage.",
    problem:
      "The consultancy had a strong offer, but needed a clearer digital presence that explained its services, sectors and expertise in a way potential clients could understand quickly.\n\nThe site also needed to support the business as a serious consultancy, not just act as a basic online brochure.",
    whatWeBuilt:
      "We created a structured consultancy website with clear page hierarchy, refined messaging and a professional visual system.\n\nThe build included:",
    whatWeBuiltItems: [
      "Homepage structure and service positioning",
      "Clear breakdown of consultancy services",
      "Sector-focused content areas",
      "About page structure",
      "Contact journey",
      "Refined brand direction",
      "Privacy and terms pages",
      "Hosting and technical setup support",
    ],
    technicalApproach:
      "The site was built to keep the editing experience manageable while still giving the pages a more bespoke feel. Custom sections were used where needed, with a focus on layout, spacing, typography and content clarity.\n\nThe structure was designed around the way consultancy buyers assess trust: experience, sectors, services, approach and a simple route to enquiry.",
    outcome:
      "Give2Gets Project Planning now has a more credible and structured online presence. The website gives the consultancy a clearer way to present its expertise, support referrals and direct potential clients towards a professional enquiry.",
    testimonial: {
      quote:
        "Working with AJ at TDev Digital to develop my website was a seamless and enjoyable experience from start to finish. AJ took the time to fully understand my vision and business objectives, while paying close attention to the finer details that were important to me. What impressed me most was his ability to take my ideas and enhance them with his own creativity, expertise and practical suggestions, resulting in a website that exceeded my expectations. His collaborative approach, professionalism and commitment to delivering a high-quality end product made the entire process straightforward and stress-free. I would highly recommend AJ and TDev Digital to anyone looking for a talented and reliable web development partner.",
      name: "Natalie",
      business: "Give2Gets Project Planning",
    },
    keyPoints: [
      "Professional consultancy website",
      "Clear service and sector structure",
      "Refined messaging and brand presentation",
      "Built for credibility and enquiry confidence",
      "Ongoing technical support setup",
    ],
    services: [
      "Website design",
      "Website development",
      "Brand refinement",
      "Content structure",
      "Hosting support",
    ],
    stack: ["WordPress", "Custom sections", "SEO foundations"],
    featuredImage: "/projects/Give2gets-preview.png",
    featured: true,
    displayOrder: 2,
  },
  {
    id: "alchemy-ferns",
    slug: "alchemy-ferns",
    title: "Alchemy Ferns",
    category: "Ecommerce Website",
    projectType: "Ecommerce website",
    sector: "Specialist plants / ecommerce",
    summary:
      "A full website makeover for a specialist fern nursery, focused on product browsing, calm visuals and a more professional ecommerce experience.",
    overview:
      "Alchemy Ferns needed a complete website makeover and upgrade for a specialist fern nursery. The site needed to feel calm, credible and easy to browse, while still supporting product discovery and ecommerce activity.\n\nThe project focused on improving the way customers understood the business, explored products and moved through the website.",
    problem:
      "The existing website needed a stronger visual direction, clearer content structure and a more professional ecommerce experience.\n\nFor a specialist nursery, trust and clarity are important. Visitors need to understand the type of products available, the expertise behind the business and how to make an enquiry or purchase with confidence.",
    whatWeBuilt:
      "We delivered a full website refresh with a stronger ecommerce structure and a more polished visual experience.\n\nThe build included:",
    whatWeBuiltItems: [
      "Website redesign and layout improvements",
      "Product and category structure",
      "Bespoke page sections",
      "Clearer navigation",
      "Improved content hierarchy",
      "Contact and enquiry routes",
      "Local SEO foundations",
      "Ongoing technical support",
    ],
    technicalApproach:
      "The site was structured around product browsing and business credibility. The design avoided unnecessary clutter and focused on calm visuals, clear content and practical ecommerce paths.\n\nBespoke elements were added where needed so the website could better reflect the character of the business rather than feeling like a generic template.",
    outcome:
      "Alchemy Ferns now has a more professional and useful ecommerce presence. The website better reflects the quality of the business, improves the browsing experience and gives customers clearer ways to understand the products and make contact.",
    testimonial: {
      quote:
        "Having engaged Towse Digital Development to complete a full website makeover and upgrade, we found them to be honest and accurate in their appraisal. They completed a thorough and professional job, adding a number of bespoke elements where required. We found them knowledgeable, approachable and efficient throughout, and would happily recommend their services.",
      name: "Mark Taylor",
      business: "Alchemy Ferns",
    },
    keyPoints: [
      "Full website makeover",
      "Ecommerce structure and product browsing",
      "Bespoke content sections",
      "Clearer enquiry paths",
      "Improved professional presentation",
    ],
    services: [
      "Website redesign",
      "Ecommerce structure",
      "Product browsing",
      "SEO foundations",
      "Bespoke content sections",
    ],
    stack: ["Ecommerce website", "Product catalogue", "Local SEO foundations"],
    featuredImage: "/projects/alchemyferns-preview.png",
    featured: true,
    displayOrder: 3,
  },
  {
    id: "stay-at-filey",
    slug: "stay-at-filey",
    title: "Stay At Filey",
    category: "Holiday Cottage Website",
    projectType: "Holiday cottage website",
    sector: "Hospitality / accommodation",
    summary:
      "A property-led holiday cottage website focused on accommodation clarity, guest confidence and enquiry routes.",
    overview:
      "Stay At Filey needed a website that presented its holiday cottages clearly and gave potential guests a simple way to understand the accommodation, location and enquiry options.\n\nThe project focused on clarity, trust and value. The site needed to feel professional, but it also needed to be easy for guests to use.",
    problem:
      "Holiday accommodation websites need to answer practical questions quickly. Guests want to know what the property looks like, where it is, who it suits and how to make an enquiry.\n\nThe website needed to organise that information clearly and present the cottages in a way that felt reliable and easy to browse.",
    whatWeBuilt:
      "We created a property-led website that focused on accommodation clarity and guest confidence.\n\nThe build included:",
    whatWeBuiltItems: [
      "Clear homepage structure",
      "Property information sections",
      "Image-led presentation",
      "Mobile-friendly layouts",
      "Guest-focused content structure",
      "Contact and enquiry routes",
      "Practical support around content and launch",
    ],
    technicalApproach:
      "The site was designed around the questions guests are likely to ask before making contact. Content was structured to reduce friction and make the accommodation easier to understand across desktop and mobile.\n\nThe build stayed focused on what the business actually needed: a clear, good-value website that presented the cottages properly and helped visitors take the next step.",
    outcome:
      "Stay At Filey now has a clearer and more professional website that better represents the cottages and supports guest enquiries. The site gives visitors a stronger first impression and makes the key information easier to access.",
    testimonial: {
      quote:
        "TDev Digital took the time to understand what we needed and delivered a website that represents the cottages clearly and professionally. The process was straightforward, good value for money and focused on what would actually help guests find the right information and enquire with confidence.",
      name: "Victoria",
      business: "Stay At Filey",
    },
    keyPoints: [
      "Holiday cottage website",
      "Property-led content structure",
      "Clear guest journey",
      "Mobile-friendly presentation",
      "Built around value and practical business needs",
    ],
    services: [
      "Website design",
      "Content structure",
      "Property presentation",
      "Booking enquiry journey",
    ],
    stack: ["Website build", "Property-led content", "Responsive design"],
    featuredImage: "/projects/stayatfiley-preview.png",
    featured: true,
    displayOrder: 4,
  },
  {
    id: "virtue-developments",
    slug: "virtue-developments",
    title: "Virtue Developments",
    category: "Construction Website",
    projectType: "Construction website",
    sector: "Construction / property development",
    summary:
      "A bold construction website built around strong visual presentation, clear service messaging and enquiry confidence.",
    overview:
      "Virtue Developments needed a bold, professional website that could present the business clearly and support trust with potential clients.\n\nFor a construction and development business, the site needed to communicate credibility quickly through strong visuals, direct messaging and a straightforward route to enquiry.",
    problem:
      "The business needed a website that felt more established and better aligned with the quality of its work.\n\nThe main challenge was to create a site that looked professional, avoided clutter and gave visitors enough confidence to get in touch.",
    whatWeBuilt:
      "We built a modern construction website around clear navigation, strong visual presentation and direct service messaging.\n\nThe build included:",
    whatWeBuiltItems: [
      "Homepage design and development",
      "Clear service sections",
      "Project-led credibility structure",
      "Contact and enquiry routes",
      "Responsive layouts",
      "WordPress setup",
      "Technical launch support",
    ],
    technicalApproach:
      "The site was built in WordPress to keep the business in control of future updates while still allowing a more tailored visual structure.\n\nThe design focused on strong imagery, clear sections and a simple user journey. The goal was to make the business look credible quickly and remove unnecessary friction from the enquiry process.",
    outcome:
      "Virtue Developments now has a sharper and more professional online presence. The site gives the business a stronger platform for enquiries, referrals and future project updates.",
    keyPoints: [
      "Construction business website",
      "WordPress development",
      "Strong visual direction",
      "Clear service and enquiry structure",
      "Built for credibility and future updates",
    ],
    services: [
      "Website design",
      "WordPress development",
      "Project-led content",
      "Enquiry structure",
    ],
    stack: ["WordPress", "Responsive design", "SEO foundations"],
    featuredImage: "/projects/virtuedevelopments-preview.png",
    featured: true,
    displayOrder: 5,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((project) => project.featured)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

export function getFeaturedProject(): Project | undefined {
  return projects.find((project) => project.slug === "engine-room-coach");
}

export function getSelectedWorkProjects(): Project[] {
  const slugs = [
    "give2gets-project-planning",
    "alchemy-ferns",
    "virtue-developments",
    "stay-at-filey",
  ];

  return slugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => project !== undefined);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  previous?: Project;
  next?: Project;
} {
  const sorted = [...projects].sort((a, b) => a.displayOrder - b.displayOrder);
  const index = sorted.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return {};
  }

  return {
    previous: index > 0 ? sorted[index - 1] : undefined,
    next: index < sorted.length - 1 ? sorted[index + 1] : undefined,
  };
}

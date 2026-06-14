// Temporary local data source. This structure is intentionally CMS-ready for a future Sanity migration.

export type BuildArchiveItem = {
  id: string;
  project: string;
  slug?: string;
  sector: string;
  buildType: string;
  platform?: string;
  scope: string;
  year?: string;
  date?: string;
  liveUrl?: string;
  displayOrder: number;
  visible?: boolean;
};

export const buildArchive: BuildArchiveItem[] = [
  {
    id: "banners-fisheries",
    project: "Banners Fisheries",
    sector: "Local food business",
    buildType: "Landing page",
    platform: "Wix / WordPress",
    liveUrl: "https://www.bannerfishandchips.co.uk/",
    scope:
      "Landing page structure, service messaging and enquiry-focused content for a local food business.",
    displayOrder: 1,
    visible: true,
  },
  {
    id: "bromwich-family-butchers",
    project: "Bromwich Family Butchers",
    sector: "Retail / food",
    buildType: "Business website",
    platform: "Wix",
    liveUrl: "https://www.bromwichfamilybutchers.com/",
    scope:
      "Business website structure, product-led content and local presence improvements for an established butcher.",
    displayOrder: 2,
    visible: true,
  },
  {
    id: "grimshaw-autos",
    project: "Grimshaw Autos",
    sector: "Automotive",
    buildType: "Landing page / migration",
    platform: "WordPress",
    liveUrl: "https://www.grimshawautosleigh.co.uk/",
    scope:
      "Website refresh, hosting migration and technical cleanup for a local automotive business.",
    displayOrder: 3,
    visible: true,
  },
  {
    id: "cj-buyers",
    project: "C&J Buyers",
    sector: "Wholesale / ecommerce",
    buildType: "Store setup",
    platform: "Shopify / Wix",
    liveUrl: "https://www.cjbuyers.co.uk/",
    scope:
      "Online store structure and digital setup for a wholesale and resale-focused business.",
    displayOrder: 4,
    visible: true,
  },
  {
    id: "lacey-darwen-structural-engineers",
    project: "Lacey Darwen Structural Engineers",
    sector: "Professional services",
    buildType: "Business website",
    platform: "WordPress",
    scope:
      "Professional services website with clear service structure, credibility-focused content and enquiry pathways.",
    displayOrder: 5,
    visible: true,
  },
  {
    id: "flood-divert",
    project: "Flood Divert",
    sector: "Product / ecommerce",
    buildType: "Website support",
    platform: "WordPress / Ecommerce",
    liveUrl: "https://www.flooddivert.co.uk/",
    scope:
      "Digital presence support, content updates and technical assistance for a product-led business.",
    displayOrder: 6,
    visible: true,
  },
  {
    id: "bromwich-family-butchers-xmas",
    project: "Bromwich Family Butchers Christmas Orders",
    sector: "Retail / food",
    buildType: "Seasonal order form",
    platform: "Wix / Forms",
    scope:
      "Seasonal order form setup with a clearer customer journey for Christmas product enquiries and orders.",
    displayOrder: 7,
    visible: true,
  },
  {
    id: "holiday-cottage-guides",
    project: "Holiday Cottage Digital Guides",
    sector: "Hospitality",
    buildType: "Guest guide setup",
    platform: "Touch Stay",
    scope:
      "Digital guest guide structure, content transfer and setup support for holiday cottage visitors.",
    displayOrder: 8,
    visible: true,
  },
  {
    id: "yorvic-upvc-door-repair",
    project: "Yorvic UPVC Door Repair",
    slug: "yorvic-upvc-door-repair",
    sector: "Local services",
    buildType: "Landing page",
    platform: "Wix / SEO",
    date: "August 2024",
    year: "2024",
    liveUrl: "https://www.yorkupvcdoorrepair.co.uk/",
    scope:
      "Modern landing page with custom branding, service-led content, local search structure and clear enquiry routes.",
    displayOrder: 9,
    visible: true,
  },
  {
    id: "the-fusion-clo",
    project: "The Fusion Clo",
    slug: "the-fusion-clo",
    sector: "Clothing / ecommerce",
    buildType: "Ecommerce website",
    platform: "Wix / Ecommerce",
    date: "August 2024",
    year: "2024",
    liveUrl: "https://www.thefusionclo.com/",
    scope:
      "Ecommerce website and launch support for a fitness and casualwear brand, including product structure, email activity and conversion-focused content.",
    displayOrder: 10,
    visible: true,
  },
  {
    id: "peacocks-hair-design",
    project: "Peacocks Hair Design",
    slug: "peacocks-hair-design",
    sector: "Hair / beauty",
    buildType: "Business website",
    platform: "Wix / SEO",
    date: "May 2024",
    year: "2024",
    liveUrl: "https://www.peacockhairdesign.co.uk/",
    scope:
      "Custom salon website shaped around the client’s visual direction, with local SEO foundations and Google Business support.",
    displayOrder: 11,
    visible: true,
  },
  {
    id: "sporting-connexions",
    project: "Sporting Connexions",
    slug: "sporting-connexions",
    sector: "Charity / events",
    buildType: "Event website",
    platform: "Wix",
    date: "December 2023",
    year: "2023",
    scope:
      "Bespoke event website for a charitable sports organisation, promoting events, partners, sponsors and beneficiaries across desktop and mobile.",
    displayOrder: 12,
    visible: true,
  },
  {
    id: "heworth-arlfc",
    project: "Heworth ARLFC",
    slug: "heworth-arlfc",
    sector: "Amateur sport",
    buildType: "Club website / CMS",
    platform: "Wix / CMS",
    date: "December 2023",
    year: "2023",
    liveUrl: "https://www.heworthrl.co.uk/",
    scope:
      "Large amateur rugby club website with editable news, fixtures, results, events, sponsor information and responsive club pages.",
    displayOrder: 13,
    visible: true,
  },
  {
    id: "york-rlfc",
    project: "York RLFC",
    slug: "york-rlfc",
    sector: "Professional sport",
    buildType: "Club website / CMS",
    platform: "Wix / CMS",
    date: "April 2021",
    year: "2021",
    liveUrl: "https://www.yorkrlfc.com/",
    scope:
      "Long-running professional sports club website with news, fixtures, results, community updates and centralised club information.",
    displayOrder: 14,
    visible: true,
  },
  {
    id: "fowlers-of-york",
    project: "Fowlers of York",
    slug: "fowlers-of-york",
    sector: "Retail / food",
    buildType: "Ecommerce website",
    platform: "Wix / Ecommerce",
    date: "June 2021",
    year: "2021",
    liveUrl: "https://www.fowlersofyork.co.uk/",
    scope:
      "Retail and wholesale fishmonger website with online ordering, collection and delivery options, and regularly updated product availability.",
    displayOrder: 15,
    visible: true,
  },
  {
    id: "trade-cars-4-u",
    project: "Trade Cars 4 U",
    slug: "trade-cars-4-u",
    sector: "Automotive",
    buildType: "Business website",
    platform: "Wix",
    date: "September 2022",
    year: "2022",
    liveUrl: "https://www.trade-cars4u.com/",
    scope:
      "Used car garage website with vehicle and service information, custom branding, contact routes and local visibility foundations.",
    displayOrder: 16,
    visible: true,
  },
  {
    id: "k-and-s-paving",
    project: "K & S Paving",
    slug: "k-and-s-paving",
    sector: "Groundworks / local services",
    buildType: "Landing page",
    platform: "Wix",
    date: "August 2024",
    year: "2024",
    scope:
      "Compact service website presenting patios, driveways, drainage work and clear enquiry information for a local groundworks business.",
    displayOrder: 17,
    visible: true,
  },
  {
    id: "universal-physique-coaching",
    project: "Universal Physique Coaching",
    slug: "universal-physique-coaching",
    sector: "Fitness / coaching",
    buildType: "Coaching website",
    platform: "Wix / Members area",
    date: "March 2022",
    year: "2022",
    scope:
      "On-brand coaching website designed to convert social traffic, with a planned members area for training, nutrition and client support.",
    displayOrder: 18,
    visible: true,
  },
];

export function getVisibleBuildArchiveItems(): BuildArchiveItem[] {
  return buildArchive
    .filter((item) => item.visible !== false)
    .sort((a, b) => a.displayOrder - b.displayOrder);
}

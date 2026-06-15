export type ProcessStep = {
  num: string;
  title: string;
  focus: string;
  description: string;
  output: string;
  checklist: string[];
};

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Clarify",
    focus: "Scope and goals",
    description:
      "We define the business problem, project scope and what the website or system needs to achieve before anything is designed or built.",
    output: "Clear brief",
    checklist: [
      "Business goals",
      "Target users",
      "Required pages or features",
      "Existing issues",
      "Success criteria",
    ],
  },
  {
    num: "02",
    title: "Plan",
    focus: "Structure and approach",
    description:
      "We map the structure, content, user journey and technical setup so the project has a clear direction before development starts.",
    output: "Build plan",
    checklist: [
      "Sitemap or feature map",
      "Content structure",
      "User journeys",
      "Technical requirements",
      "Launch priorities",
    ],
  },
  {
    num: "03",
    title: "Build",
    focus: "Design and development",
    description:
      "We design and develop in focused stages, sharing progress through working previews rather than waiting until the end.",
    output: "Working preview",
    checklist: [
      "Interface design",
      "Responsive build",
      "Core functionality",
      "Forms and integrations",
      "Review rounds",
    ],
  },
  {
    num: "04",
    title: "Launch",
    focus: "Testing and setup",
    description:
      "We test the site or system, connect the important technical pieces and prepare everything for a clean launch.",
    output: "Live system",
    checklist: [
      "Domain setup",
      "Forms and notifications",
      "Analytics",
      "Payments if needed",
      "Final testing",
    ],
  },
  {
    num: "05",
    title: "Improve",
    focus: "Support and refinement",
    description:
      "We support, update and refine the site or system so it keeps working as the business grows.",
    output: "Ongoing support",
    checklist: [
      "Updates",
      "Technical fixes",
      "Tracking review",
      "Content changes",
      "Future improvements",
    ],
  },
];

export type ProjectControlStep = {
  num: string;
  title: string;
  description: string;
};

export const projectControlSteps: ProjectControlStep[] = [
  {
    num: "01",
    title: "Clear scope",
    description:
      "The project starts with what the business needs the website, app or system to do.",
  },
  {
    num: "02",
    title: "Working previews",
    description:
      "You see progress as the build develops, instead of waiting for a finished reveal.",
  },
  {
    num: "03",
    title: "Practical launch support",
    description:
      "The important technical details are checked before launch, including forms, domains, tracking, payments and email where needed.",
  },
];

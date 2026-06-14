export type ProcessStep = {
  num: string;
  title: string;
  description: string;
  output: string;
};

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Clarify",
    description:
      "We define the business problem, project scope and what the website or system needs to achieve.",
    output: "Clear brief",
  },
  {
    num: "02",
    title: "Plan",
    description:
      "We map the structure, content, user journey and technical setup before design or development starts.",
    output: "Build plan",
  },
  {
    num: "03",
    title: "Build",
    description:
      "We design and develop in focused stages, with regular check-ins and a working preview as the build progresses.",
    output: "Working preview",
  },
  {
    num: "04",
    title: "Launch",
    description:
      "We test, connect domains, forms, analytics, payments and the setup needed for a clean launch.",
    output: "Live system",
  },
  {
    num: "05",
    title: "Improve",
    description:
      "We support, update and refine the site or system so it keeps working as the business grows.",
    output: "Ongoing support",
  },
];

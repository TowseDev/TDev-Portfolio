export type ProcessStep = {
  num: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "Clarify",
    description:
      "We define the problem, the business goal and what the website or system actually needs to achieve.",
  },
  {
    num: "02",
    title: "Plan",
    description:
      "We map the structure, content, user journey and technical approach before design or development begins.",
  },
  {
    num: "03",
    title: "Build",
    description:
      "We design and develop the website, app or digital system with regular check-ins and a clear staging process.",
  },
  {
    num: "04",
    title: "Launch",
    description:
      "We test, connect domains, forms, analytics, payments and the technical setup needed for a clean launch.",
  },
  {
    num: "05",
    title: "Improve",
    description:
      "We provide ongoing support, updates and improvements so the site or system keeps working after launch.",
  },
];

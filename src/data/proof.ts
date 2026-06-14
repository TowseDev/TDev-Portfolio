export type ProofFigure = {
  id: string;
  label: string;
  animate: "count" | "fade";
  countTo?: number;
  unit?: string;
  suffix?: string;
  display: string;
};

export const proofFigures: ProofFigure[] = [
  {
    id: "projects",
    countTo: 25,
    unit: "+",
    display: "25+",
    animate: "count",
    label: "Projects delivered across websites, ecommerce, apps and digital systems.",
  },
  {
    id: "satisfaction",
    countTo: 100,
    unit: "%",
    display: "100%",
    animate: "count",
    label: "Client satisfaction across completed projects and ongoing support.",
  },
  {
    id: "traffic",
    countTo: 200,
    suffix: "k",
    unit: "+",
    display: "200k+",
    animate: "count",
    label: "Monthly web traffic supported across client websites and digital platforms.",
  },
  {
    id: "communication",
    display: "1:1",
    animate: "fade",
    label: "Direct communication with the team planning, building and supporting your project.",
  },
];

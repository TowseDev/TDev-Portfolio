export type ProofTestimonial = {
  id: string;
  quote: string;
  name: string;
  business: string;
  type: string;
};

export const proofTestimonials: ProofTestimonial[] = [
  {
    id: "give2gets",
    quote:
      "TDev understood what we needed quickly and turned it into a site that feels much clearer, more professional and easier for clients to understand.",
    name: "Client Name",
    business: "Give2Gets Project Planning",
    type: "Consultancy website",
  },
  {
    id: "alchemy-ferns",
    quote:
      "The process was straightforward from start to finish. We had someone we could trust to explain the options clearly and get the technical side handled properly.",
    name: "Client Name",
    business: "Alchemy Ferns",
    type: "Ecommerce website",
  },
  {
    id: "general",
    quote:
      "It was not just about making the website look better. TDev helped us think through the structure, the user journey and the practical details behind the site.",
    name: "Client Name",
    business: "Client project",
    type: "Website / digital support",
  },
];

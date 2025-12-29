export type Product = {
  id: string;
  slug: string;
  plantName: string;
  variety: string;
  maturityPeriod: string;
  maturityClass: "early" | "medium" | "late";
  category: string;
  expectedYield: string;
  cost: string;
  description: string;
  image: string;
};

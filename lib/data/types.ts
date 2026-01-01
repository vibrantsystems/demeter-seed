export interface AgronomyGuide {
  plantingTime: string;
  spacing: string;
  fertilizer: string;
  weedControl: string;
  harvesting: string;
  storage: string;
}

export interface Product {
  id: string;
  slug: string;
  plantName: string;
  variety: string;
  category: string;
  maturityClass: string;
  maturityPeriod: string;
  expectedYield: string;
  cost: string;
  description: string;
  image: string;
  agronomy: AgronomyGuide;
}

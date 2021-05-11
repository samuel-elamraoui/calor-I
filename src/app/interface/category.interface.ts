export interface MarketCategory {
  id: string;
  name: string;
}
export interface ProductCategory {
  id: string;
  name: string;
}
export interface NutriscoreCategory {
  id: string;
  name: string;
}

export interface ResultResearch {
  id: string;
  name: string;
  description: string;
  image: string;
  nutriscoreGrade: string;
  energyKcal100g: string;
}
export interface ValidateCart {
  cartName: string;
  cart: ResultResearch[];
}



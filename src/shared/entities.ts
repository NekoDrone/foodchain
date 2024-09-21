export enum FoodTypes {
  MeatProtein = "meat-protein",
  Carbs = "carbs",
  VegFruit = "veg-fruit",
}

export enum MealTimes {
  Breakfast = "breakfast",
  Lunch = "lunch",
  Dinner = "dinner",
}

export interface FoodItem {
  name: string;
  imageLink?: string;
}

export interface ParamsProps {
  params: MealParams;
}

export interface MealParams {
  meal: string;
}

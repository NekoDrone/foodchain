export enum FoodType {
  MeatProtein = "meatProtein",
  Carbs = "carbs",
  VegFruit = "vegFruit",
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

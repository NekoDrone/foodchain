export enum FoodType {
  MeatProtein = "protein",
  Carbs = "carbs",
  VegFruit = "fruitVeg",
}

export enum MealTimes {
  Breakfast = "breakfast",
  Lunch = "lunch",
  Dinner = "dinner",
}

export interface FoodData {
  name: string;
  imageLink?: string;
  isHealthy: boolean;
  category: FoodType;
}

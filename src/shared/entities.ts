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
  nutritionInfo: NutritionInfo;
}

export interface NutritionInfo {
  calories: number;
  fat: number;
  protein: number;
  calcium: number;
  iron: number;
  carbohydrates: number;
  sugar: number;
}

export enum NutritionTypes {
  Calories = "calories",
  Fat = "fat",
  Protein = "protein",
  Calcium = "calcium",
  Iron = "iron",
  Carbohydrates = "carbohydrates",
  Sugar = "sugar",
}

export enum NutritionTypesUnit {
  calories = "kcal",
  fat = "g",
  protein = "g",
  carbohydrates = "g",
  calcium = "mg",
  iron = "mg",
  sugar = "g",
}

import { FoodData, FoodType } from "@/shared/entities";

export const MOCK_CARBOHYDRATES: FoodData[] = [
  {
    name: "beehoon",
    imageLink: "/assets/images/foods/carbs/beehoon.webp",
    isHealthy: false,
    category: FoodType.Carbs,
    nutritionInfo: {
      calories: 200.5,
      fat: 7.8,
      protein: 15.2,
      calcium: 120.3,
      iron: 1.5,
      carbohydrates: 25.4,
      sugar: 5.2,
    },
  },
  {
    name: "brownrice",
    imageLink: "/assets/images/foods/carbs/brownrice.webp",
    isHealthy: true,
    category: FoodType.Carbs,
    nutritionInfo: {
      calories: 150.2,
      fat: 3.5,
      protein: 10.8,
      calcium: 98.6,
      iron: 1.0,
      carbohydrates: 22.0,
      sugar: 3.1,
    },
  },
  {
    name: "porridge",
    imageLink: "/assets/images/foods/carbs/porridge.webp",
    isHealthy: false,
    category: FoodType.Carbs,
    nutritionInfo: {
      calories: 320.0,
      fat: 12.4,
      protein: 20.1,
      calcium: 230.5,
      iron: 2.3,
      carbohydrates: 35.7,
      sugar: 7.5,
    },
  },
  {
    name: "whiterice",
    imageLink: "/assets/images/foods/carbs/whiterice.webp",
    isHealthy: true,
    category: FoodType.Carbs,
    nutritionInfo: {
      calories: 180.6,
      fat: 4.2,
      protein: 8.5,
      calcium: 45.8,
      iron: 0.9,
      carbohydrates: 27.6,
      sugar: 4.7,
    },
  },
];

export const MOCK_PROTEIN: FoodData[] = [
  {
    name: "drumstick",
    imageLink: "/assets/images/foods/protein/drumstick.webp",
    isHealthy: false,
    category: FoodType.MeatProtein,
    nutritionInfo: {
      calories: 90.0,
      fat: 1.0,
      protein: 5.2,
      calcium: 20.3,
      iron: 0.6,
      carbohydrates: 12.3,
      sugar: 2.0,
    },
  },
  {
    name: "steamfish",
    imageLink: "/assets/images/foods/protein/steamfish.webp",
    isHealthy: false,
    category: FoodType.MeatProtein,
    nutritionInfo: {
      calories: 250.8,
      fat: 9.1,
      protein: 18.3,
      calcium: 150.0,
      iron: 1.8,
      carbohydrates: 28.0,
      sugar: 6.4,
    },
  },
  {
    name: "steamchicken",
    imageLink: "/assets/images/foods/protein/steamchicken.webp",
    isHealthy: true,
    category: FoodType.MeatProtein,
    nutritionInfo: {
      calories: 310.7,
      fat: 13.0,
      protein: 22.6,
      calcium: 200.7,
      iron: 2.1,
      carbohydrates: 30.9,
      sugar: 5.9,
    },
  },
  {
    name: "tofu",
    imageLink: "/assets/images/foods/protein/tofu.webp",
    isHealthy: false,
    category: FoodType.MeatProtein,
    nutritionInfo: {
      calories: 110.3,
      fat: 2.0,
      protein: 7.6,
      calcium: 40.5,
      iron: 0.8,
      carbohydrates: 18.4,
      sugar: 2.7,
    },
  },
];

export const MOCK_FRUITVEG: FoodData[] = [
  {
    name: "broccoli",
    imageLink: "/assets/images/foods/fruitVeg/broccoli.webp",
    isHealthy: true,
    category: FoodType.VegFruit,
    nutritionInfo: {
      calories: 140.0,
      fat: 3.3,
      protein: 9.2,
      calcium: 70.6,
      iron: 1.1,
      carbohydrates: 21.7,
      sugar: 3.0,
    },
  },
  {
    name: "cabbage",
    imageLink: "/assets/images/foods/fruitVeg/cabbage.webp",
    isHealthy: false,
    category: FoodType.VegFruit,
    nutritionInfo: {
      calories: 220.5,
      fat: 6.5,
      protein: 12.3,
      calcium: 120.0,
      iron: 1.4,
      carbohydrates: 29.0,
      sugar: 4.6,
    },
  },
  {
    name: "longbeans",
    imageLink: "/assets/images/foods/fruitVeg/longbeans.webp",
    isHealthy: false,
    category: FoodType.VegFruit,
    nutritionInfo: {
      calories: 280.9,
      fat: 10.0,
      protein: 19.0,
      calcium: 180.9,
      iron: 2.0,
      carbohydrates: 34.5,
      sugar: 6.3,
    },
  },
  {
    name: "xiaobaicai",
    imageLink: "/assets/images/foods/fruitVeg/xiaobaicai.webp",
    isHealthy: false,
    category: FoodType.VegFruit,
    nutritionInfo: {
      calories: 195.4,
      fat: 5.7,
      protein: 11.8,
      calcium: 130.2,
      iron: 1.3,
      carbohydrates: 26.3,
      sugar: 4.1,
    },
  },
];

export const getMocks = (foodType: FoodType): FoodData[] => {
  switch (foodType) {
    case FoodType.Carbs:
      return MOCK_CARBOHYDRATES;
    case FoodType.MeatProtein:
      return MOCK_PROTEIN;
    case FoodType.VegFruit:
      return MOCK_FRUITVEG;
  }
};

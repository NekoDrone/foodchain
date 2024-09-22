import { FoodData, FoodType } from "@/shared/entities";

export const MOCK_CARBOHYDRATES: FoodData[] = [
  {
    name: "beehoon",
    imageLink: "/assets/images/foods/carbohydrates/beehoon.webp",
    isHealthy: false,
    category: FoodType.Carbs,
  },
  {
    name: "brownrice",
    imageLink: "/assets/images/foods/carbohydrates/brownrice.webp",
    isHealthy: true,
    category: FoodType.Carbs,
  },
  {
    name: "porridge",
    imageLink: "/assets/images/foods/carbohydrates/porridge.webp",
    isHealthy: false,
    category: FoodType.Carbs,
  },
  {
    name: "whiterice",
    imageLink: "/assets/images/foods/carbohydrates/whiterice.webp",
    isHealthy: true,
    category: FoodType.Carbs,
  },
];

export const MOCK_PROTEIN: FoodData[] = [
  {
    name: "drumstick",
    imageLink: "/assets/images/foods/protein/drumstick.webp",
    isHealthy: false,
    category: FoodType.MeatProtein,
  },
  {
    name: "steamfish",
    imageLink: "/assets/images/foods/protein/steamfish.webp",
    isHealthy: false,
    category: FoodType.MeatProtein,
  },
  {
    name: "steamchicken",
    imageLink: "/assets/images/foods/protein/steamchicken.webp",
    isHealthy: true,
    category: FoodType.MeatProtein,
  },
  {
    name: "tofu",
    imageLink: "/assets/images/foods/protein/tofu.webp",
    isHealthy: false,
    category: FoodType.MeatProtein,
  },
];

export const MOCK_FRUITVEG: FoodData[] = [
  {
    name: "broccoli",
    imageLink: "/assets/images/foods/fruits-vegetables/broccoli.webp",
    isHealthy: true,
    category: FoodType.VegFruit,
  },
  {
    name: "cabbage",
    imageLink: "/assets/images/foods/fruits-vegetables/cabbage.webp",
    isHealthy: false,
    category: FoodType.VegFruit,
  },
  {
    name: "longbeans",
    imageLink: "/assets/images/foods/fruits-vegetables/longbeans.webp",
    isHealthy: false,
    category: FoodType.VegFruit,
  },
  {
    name: "xiaobaicai",
    imageLink: "/assets/images/foods/fruits-vegetables/xiaobaicai.webp",
    isHealthy: false,
    category: FoodType.VegFruit,
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

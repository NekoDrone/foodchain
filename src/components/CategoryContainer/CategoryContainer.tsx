import { FoodType } from "@/shared/entities";
import { useMemo, useState } from "react";
import { FoodCategory } from "@/components/CategoryContainer/FoodCategory";
import { getMocks } from "@/shared/mocks";
import { FoodItem } from "@/components/CategoryContainer/FoodItem";

export const CategoryContainer = () => {
  const initialCategoryState = undefined;
  const [showCategory, setShowCategory] = useState(
    initialCategoryState as FoodType | undefined,
  );

  const foodCategories = useMemo(() => {
    return Object.values(FoodType).map((foodType) => {
      const isGreyedOut = false;
      return (
        <FoodCategory
          category={foodType}
          key={foodType}
          setShowCategory={setShowCategory}
          isGreyedOut={isGreyedOut}
        />
      );
    });
  }, []);

  const foodItems = useMemo(() => {
    const foods = getMocks(showCategory ?? FoodType.Carbs);
    return foods.map((food) => {
      return <FoodItem food={food} key={food.name} />;
    });
  }, [showCategory]);

  return <>{showCategory ? foodItems : foodCategories}</>;
};

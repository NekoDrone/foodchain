import { FoodData, FoodType } from "@/shared/entities";
import { FC, useState } from "react";
import { FoodCategory } from "@/components/CategoryContainer/FoodCategory";
import { getMocks } from "@/shared/mocks";
import { FoodItem } from "@/components/CategoryContainer/FoodItem";
import { SelectedFoodState } from "@/components/MealPlanner";

interface SelectionContainerProps {
  handleFoodSelection: (food: FoodData) => void;
  selectedFoods: SelectedFoodState
}

export const SelectionContainer: FC<SelectionContainerProps> = ({
  handleFoodSelection,
  selectedFoods
}) => {
  const initialShowCategory = undefined;
  const [showCategory, setShowCategory] = useState(
    initialShowCategory as FoodType | undefined,
  );

  const completeCategory = (food: FoodData) => {
    setShowCategory(undefined);
    handleFoodSelection(food);
  };

  const foodCategories = Object.values(FoodType).map((foodType: FoodType) => {
    const isDisabled = selectedFoods[foodType] != undefined;
    return (
      <FoodCategory
        category={foodType}
        key={foodType}
        setShowCategory={setShowCategory}
        isDisabled={isDisabled}
      />
    );
  });

  const foods = getMocks(showCategory ?? FoodType.Carbs);
  const foodItems = foods.map((food) => {
    return (
      <FoodItem
        food={food}
        key={food.name}
        handleCompletion={completeCategory}
      />
    );
  });

  return <>{showCategory ? foodItems : foodCategories}</>;
};

import { FoodData, FoodType } from "@/shared/entities";
import { FC, useMemo, useState } from "react";
import { FoodCategory } from "@/components/CategoryContainer/FoodCategory";
import { getMocks } from "@/shared/mocks";
import { FoodItem } from "@/components/CategoryContainer/FoodItem";

interface SelectionContainerProps {
  handleFoodSelection: (food: FoodData) => void;
}

export const SelectionContainer: FC<SelectionContainerProps> = ({
  handleFoodSelection,
}) => {
  const initialShowCategory = undefined;
  const [showCategory, setShowCategory] = useState(
    initialShowCategory as FoodType | undefined,
  );

  const initialCompleted: FoodType[] = [];

  const [completed, setCompleted] = useState(initialCompleted);

  const completeCategory = (food: FoodData) => {
    const newState = [...completed];
    newState.push(food.category);
    setCompleted(newState);
    setShowCategory(undefined);
    handleFoodSelection(food);
  };

  const foodCategories = useMemo(() => {
    return Object.values(FoodType).map((foodType) => {
      const isGreyedOut = completed.includes(foodType);
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
      return (
        <FoodItem
          food={food}
          key={food.name}
          handleCompletion={completeCategory}
        />
      );
    });
  }, [showCategory]);

  return <>{showCategory ? foodItems : foodCategories}</>;
};

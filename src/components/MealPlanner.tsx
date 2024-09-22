import { FoodType } from "@/shared/entities";
import { useCallback, useState } from "react";
import { Plate } from "@/components/Plate/Plate";
import { FoodCategory } from "@/components/CategoryContainer/FoodCategory";

type CompletedState = [{ [value in FoodType]: boolean }];

export const MealPlanner = () => {
  const initialCompletedState = Object.values(FoodType).map((foodType) => {
    return { [foodType]: false };
  }) as CompletedState;

  const [completed, setCompleted] = useState(initialCompletedState);

  const completeCategory = useCallback(
    (foodType: FoodType) => {
      const newState = {
        [foodType]: true,
        ...completed,
      } as CompletedState;
      setCompleted(newState);
    },
    [completed],
  );

  const initialCategoryState = undefined;

  const [showCategory, setShowCategory] = useState(
    initialCategoryState as FoodType | undefined,
  );

  return (
    <div className="flex w-auto justify-center gap-64 align-middle">
      <Plate />
      <div className="h-750 grid auto-rows-max grid-rows-3 justify-between align-middle">
        {Object.values(FoodType).map((foodType) => {
          return (
            <FoodCategory
              category={foodType}
              key={foodType}
              handleCategoryComplete={completeCategory}
            />
          );
        })}
      </div>
    </div>
  );
};

import { Plate } from "@/components/Plate";
import { FoodCategory } from "@/components/FoodCategory";
import { FoodType } from "@/shared/entities";
import { useCallback, useState } from "react";

type PlannerState = [
 {[value in FoodType]: boolean}
]

export const MealPlanner = () => {
  
  const initialCompletedState = Object.values(FoodType).map((foodType) => {
    return {[foodType]: false}
  }) as PlannerState

  const [completed, setCompleted] = useState(initialCompletedState);
  
  const completeCategory = useCallback((foodType: FoodType) => {
    const newState = {
      [foodType]: true,
      ...completed
    } as PlannerState
    setCompleted(newState)
  }, [completed])
    
  return (
    <div className="flex w-auto justify-center gap-64 align-middle">
      <Plate />
      <div className="h-750 grid auto-rows-max grid-rows-3 justify-between align-middle">
        {Object.values(FoodType).map((foodType) => {
          return (<FoodCategory category={foodType} key={foodType} handleCategoryComplete={completeCategory}/>)
        })}
      </div>
    </div>
  );
};

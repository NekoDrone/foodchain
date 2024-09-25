"use client";

import { Plate } from "@/components/Plate/Plate";
import { SelectionContainer } from "@/components/CategoryContainer/SelectionContainer";
import { FoodData, FoodType } from "@/shared/entities";
import { useState } from "react";
import { useRouter } from "next/navigation";

type SelectedFoodState = {
  [value in FoodType]: FoodData | undefined;
};

export const MealPlanner = () => {
  const initialSelected = Object.values(FoodType).reduce((acc, key) => {
    acc[key] = undefined;
    return acc;
  }, {} as SelectedFoodState);

  const [selectedFoods, setSelectedFoods] = useState(initialSelected);

  const router = useRouter();

  const addFoodToSelection = (food: FoodData) => {
    const newState = structuredClone(selectedFoods);
    newState[food.category] = food;
    if (finishedAddingFood(newState)) {
      sessionStorage.setItem("selectedFoods", JSON.stringify(newState));
      console.log("redirecting!!");
      router.replace("/viewReport");
    } //params?
    else setSelectedFoods(newState);
  };

  return (
    <div className="flex min-h-fit min-w-fit items-center justify-center gap-16 align-middle">
      <Plate selectedFoods={selectedFoods} />
      <div className="grid max-h-screen w-[200px] auto-rows-max grid-rows-3 justify-between gap-8 overflow-scroll align-middle">
        <SelectionContainer handleFoodSelection={addFoodToSelection} />
      </div>
    </div>
  );
};

const finishedAddingFood = (selectedFoods: SelectedFoodState) => {
  console.log("finished?", Object.values(selectedFoods));
  return !Object.values(selectedFoods).includes(undefined);
};

import { NotificationFoodData } from "@/shared/functions/api";
import { FC } from "react";
import { NutritionInfo, NutritionTypes } from "@/shared/entities";
import { NutritionReadoutItem } from "@/components/NutritionReadout/NutritionReadoutItem";

interface ReadoutProps {
  selectedFoods: NotificationFoodData;
}

export const NutritionReadout: FC<ReadoutProps> = ({ selectedFoods }) => {
  const { carbs, fruitVeg, protein } = selectedFoods;

  const totalInfo: NutritionInfo = [
    carbs.nutritionInfo,
    fruitVeg.nutritionInfo,
    protein.nutritionInfo,
  ].reduce((acc, curr) => {
    for (const key of Object.keys(curr)) {
      // @ts-expect-error: Because we are using type casting magic to dynamically access each key value pair.
      acc[key] += curr[key];
    }
    return acc;
  });

  const types = Object.values(NutritionTypes) as NutritionTypes[];

  return (
    <div className="grid items-center justify-center text-lg">
      {types.map((type) => {
        console.log(type, totalInfo[type]);
        return (
          <NutritionReadoutItem
            type={type}
            value={totalInfo[type]}
            key={type}
          />
        );
      })}
    </div>
  );
};

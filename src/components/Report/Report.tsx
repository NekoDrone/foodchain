"use client";

import { FC } from "react";
import { NotificationFoodData } from "@/shared/functions/api";
import { ReportPlate } from "@/components/Report/ReportPlate";
import { NutritionReadout } from "@/components/NutritionReadout/NutritionReadout";
import { Replacements } from "@/components/Replacements/Replacements";

interface ReportProps {
  selectedFoods: NotificationFoodData;
}

export const Report: FC<ReportProps> = ({ selectedFoods }) => {
  if (
    selectedFoods.carbs == undefined ||
    selectedFoods.fruitVeg == undefined ||
    selectedFoods.protein == undefined
  )
    return <></>;

  return (
    <div className="flex space-x-32 p-24">
      <div className="grid min-h-fit min-w-fit items-center justify-center gap-16 align-middle">
        <ReportPlate selectedFoods={selectedFoods} />
        <NutritionReadout selectedFoods={selectedFoods} />
      </div>
      <div>
        <Replacements selectedFoods={selectedFoods} />
      </div>
    </div>
  );
};

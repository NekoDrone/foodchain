"use client";

import { FC } from "react";
import { NotificationFoodData } from "@/shared/functions/api";
import { ReportPlate } from "@/components/Report/ReportPlate";
import { NutritionReadout } from "@/components/NutritionReadout/NutritionReadout";

interface ReportProps {
  selectedFoods: NotificationFoodData;
}

export const Report: FC<ReportProps> = ({ selectedFoods }) => {
  return (
    <>
      <div className="grid min-h-fit min-w-fit items-center justify-center gap-16 align-middle">
        <ReportPlate selectedFoods={selectedFoods} />
        <NutritionReadout selectedFoods={selectedFoods} />
      </div>
      <div></div>
    </>
  );
};

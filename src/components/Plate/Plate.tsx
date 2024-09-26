"use client";

import { FC } from "react";
import { FoodData, FoodType } from "@/shared/entities";
import Image from "next/image";
import { FoodSlot } from "@/components/Plate/FoodSlot";

interface PlateProps {
  selectedFoods: {
    [value in FoodType]?: FoodData;
  };
}

const IMAGE_SIZE = 750;

export const Plate: FC<PlateProps> = ({ selectedFoods }) => {
  const foods = Object.entries(selectedFoods);
  const carbsKvp = foods.find(([key]) => key == FoodType.Carbs);
  const proteinKvp = foods.find(([key]) => key == FoodType.MeatProtein);
  const fruitVegKvp = foods.find(([key]) => key == FoodType.VegFruit);

  const carbs = carbsKvp && carbsKvp[1];
  const protein = proteinKvp && proteinKvp[1];
  const fruitVeg = fruitVegKvp && fruitVegKvp[1];

  return (
    <div className="relative">
      <div className="absolute inset-0">
        {carbs && (
          <FoodSlot
            food={carbs}
            className="absolute left-[40%] top-[45%] z-20 scale-110"
          />
        )}
        {fruitVeg && (
          <FoodSlot
            food={fruitVeg}
            className="absolute left-[10%] top-[30%] z-10 scale-110"
          />
        )}
        {protein && (
          <FoodSlot
            food={protein}
            className="absolute left-[40%] top-[10%] z-0 scale-110"
          />
        )}
      </div>
      <Image
        src="/assets/images/plate.webp"
        alt="plate"
        height={IMAGE_SIZE}
        width={IMAGE_SIZE}
        className="-z-10"
      />
    </div>
  );
};

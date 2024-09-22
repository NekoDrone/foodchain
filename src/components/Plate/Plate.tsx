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
    <div>
      <Image
        src="/assets/images/plate.webp"
        alt="plate"
        height={IMAGE_SIZE}
        width={IMAGE_SIZE}
        className="-z-10"
      />
      <div className="relative">
        {carbs && (
          <FoodSlot
            food={carbs}
            className="absolute left-80 top-[-26rem] z-20"
          />
        )}
        {fruitVeg && (
          <FoodSlot
            food={fruitVeg}
            className="absolute left-24 top-[-30rem] z-10 scale-110"
          />
        )}
        {protein && (
          <FoodSlot
            food={protein}
            className="absolute left-72 top-[-40rem] z-0 scale-125"
          />
        )}
      </div>
    </div>
  );
};

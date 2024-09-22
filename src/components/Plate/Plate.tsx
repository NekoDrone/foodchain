"use client";

import { FC } from "react";
import { FoodData } from "@/shared/entities";
import Image from "next/image";
import { FoodSlot } from "@/components/Plate/FoodSlot";

interface PlateProps {
  carb?: FoodData;
  protein?: FoodData;
  vegFruit?: FoodData;
}

const IMAGE_SIZE = 750;

export const Plate: FC<PlateProps> = ({ carb, protein, vegFruit }) => {
  return (
    <div>
      <Image
        src="/assets/images/plate.webp"
        alt="plate"
        height={IMAGE_SIZE}
        width={IMAGE_SIZE}
      />
      {carb && <FoodSlot food={carb} />}
      {protein && <FoodSlot food={protein} />}
      {vegFruit && <FoodSlot food={vegFruit} />}
    </div>
  );
};

"use client";

import { FC } from "react";
import { FoodItem } from "@/shared/entities";
import { FoodSlot } from "@/components/FoodSlot";
import Image from "next/image";

interface PlateProps {
  carb?: FoodItem;
  protein?: FoodItem;
  vegFruit?: FoodItem;
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
      {!carb ?? <FoodSlot food={carb} />}
      {!protein ?? <FoodSlot food={protein} />}
      {!vegFruit ?? <FoodSlot food={vegFruit} />}
    </div>
  );
};

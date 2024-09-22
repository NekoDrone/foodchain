"use client";

import { FoodData } from "@/shared/entities";
import { FC } from "react";
import Image from "next/image";

interface FoodSlotProps {
  food: FoodData;
}

export const FoodSlot: FC<FoodSlotProps> = ({ food }) => {
  const { name, imageLink } = food;

  return imageLink ? <Image src={imageLink} alt={name} /> : <p>{name}</p>;
};

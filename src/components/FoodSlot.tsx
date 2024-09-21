"use client";

import { FoodItem } from "@/shared/entities";
import { FC } from "react";
import Image from "next/image";

interface FoodSlotProps {
  food: FoodItem;
}

export const FoodSlot: FC<FoodSlotProps> = ({ food }) => {
  const { name, imageLink } = food;

  return imageLink ? <Image src={imageLink} alt={name} /> : <p>{name}</p>;
};

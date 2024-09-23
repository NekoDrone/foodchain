"use client";

import { FoodData } from "@/shared/entities";
import { FC } from "react";
import Image from "next/image";

interface FoodSlotProps {
  food: FoodData;
  className?: string;
}

const IMAGE_SIZE = 350;

export const FoodSlot: FC<FoodSlotProps> = ({ food, className }) => {
  const { name, imageLink } = food;

  const cssStrings = [
    imageLink ?? "border-4 border-b-blue-600",
    className,
  ].join(" ");

  return (
    <div className={cssStrings}>
      {imageLink ? (
        <Image
          src={imageLink}
          alt={name}
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        />
      ) : (
        <p>{name}</p>
      )}
    </div>
  );
};

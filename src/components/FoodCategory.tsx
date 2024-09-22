import { FoodTypes } from "@/shared/entities";
import { FC } from "react";
import Image from "next/image";

interface CategoryProps {
  category: FoodType;
  handleCategoryComplete: (foodType: FoodType) => void;
}

const IMAGE_SIZE = 200;

export const FoodCategory: FC<CategoryProps> = ({ category, handleCategoryComplete }) => {
  return (
    <>
      <Image
        src={`/assets/images/${category}.webp`}
        alt={category}
        height={IMAGE_SIZE}
        width={IMAGE_SIZE}
      />
    </>
  );
};

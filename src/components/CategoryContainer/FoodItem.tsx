import Image from "next/image";
import { FoodData } from "@/shared/entities";
import { FC } from "react";

interface FoodItemProps {
  food: FoodData;
  handleCompletion: (food: FoodData) => void;
}

const IMAGE_SIZE = 175;

export const FoodItem: FC<FoodItemProps> = ({ food, handleCompletion }) => {
  const { name, imageLink } = food;

  const handleClick = () => {
    handleCompletion(food);
  };

  return (
    <Image
      src={imageLink ?? "/assets/images/error.webp"}
      alt={name}
      height={IMAGE_SIZE}
      width={IMAGE_SIZE}
      onClick={handleClick}
    />
  );
};

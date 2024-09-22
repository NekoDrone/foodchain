import { FoodType } from "@/shared/entities";
import { Dispatch, FC, SetStateAction } from "react";
import Image from "next/image";

interface CategoryProps {
  category: FoodType;
  setShowCategory: Dispatch<SetStateAction<FoodType | undefined>>;
  isDisabled: boolean;
}

const IMAGE_SIZE = 200;

export const FoodCategory: FC<CategoryProps> = ({
  category,
  setShowCategory,
  isDisabled,
}) => {
  const handleClick = () => {
    if (isDisabled) return;
    setShowCategory(category);
  };

  return (
    <>
      <Image
        src={`/assets/images/${category}.webp`}
        alt={category}
        height={IMAGE_SIZE}
        width={IMAGE_SIZE}
        onClick={handleClick}
        className={"cursor-pointer" + (isDisabled ? " grayscale" : "")}
      />
    </>
  );
};

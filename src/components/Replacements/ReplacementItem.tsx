import Image from "next/image";
import { RightArrow } from "@/svgs/RightArrow";
import { FoodData } from "@/shared/entities";
import { FC } from "react";

interface ItemProps {
  healthy: FoodData;
  selected: FoodData;
}

const IMAGE_SIZE_FOOD = 200;
const IMAGE_SIZE_ICON = 50;

export const ReplacementItem: FC<ItemProps> = ({ healthy, selected }) => {
  return (
    <div className="flex items-center space-x-8 rounded-2xl">
      <div className="relative">
        <Image
          src={selected.imageLink ?? ""}
          alt={selected.name}
          height={IMAGE_SIZE_FOOD}
          width={IMAGE_SIZE_FOOD}
        />
        <Image
          src="/assets/images/red-x.webp"
          alt="red-x"
          height={IMAGE_SIZE_ICON}
          width={IMAGE_SIZE_ICON}
          className="absolute right-0 top-0"
        />
      </div>
      <RightArrow />
      <div className="relative">
        <Image
          src={healthy.imageLink ?? ""}
          alt={healthy.name}
          height={IMAGE_SIZE_FOOD}
          width={IMAGE_SIZE_FOOD}
        />
        <Image
          src="/assets/images/green-tick.webp"
          alt="green-tick"
          height={IMAGE_SIZE_ICON}
          width={IMAGE_SIZE_ICON}
          className="absolute right-0 top-0"
        />
      </div>
    </div>
  );
};

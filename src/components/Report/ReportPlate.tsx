import { FoodSlot } from "@/components/Plate/FoodSlot";
import Image from "next/image";
import { NotificationFoodData } from "@/shared/functions/api";
import { FC } from "react";

interface ReportPlateProps {
  selectedFoods: NotificationFoodData;
}

const IMAGE_SIZE = 275;

export const ReportPlate: FC<ReportPlateProps> = ({ selectedFoods }) => {
  const { carbs, fruitVeg, protein } = selectedFoods;

  return (
    <div className="relative pt-8">
      <Image
        src="/assets/images/plate.webp"
        alt="plate"
        height={IMAGE_SIZE}
        width={IMAGE_SIZE}
        className="-z-10 h-fit w-fit"
      />
      <div className="absolute inset-0 h-auto overflow-visible">
        {carbs && (
          <FoodSlot
            food={carbs}
            className="absolute right-[-15%] top-[25%] z-20 scale-[50%]"
          />
        )}
        {fruitVeg && (
          <FoodSlot
            food={fruitVeg}
            className="absolute left-[-10%] top-[32%] z-10 scale-[70%]"
          />
        )}
        {protein && (
          <FoodSlot
            food={protein}
            className="absolute left-[23%] top-[10%] z-0 scale-[70%]"
          />
        )}
      </div>
    </div>
  );
};

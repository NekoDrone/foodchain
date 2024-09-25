import { FoodSlot } from "@/components/Plate/FoodSlot";
import Image from "next/image";
import { NotificationFoodData } from "@/shared/functions/api";
import { FC } from "react";

interface ReportPlateProps {
  selectedFoods: NotificationFoodData;
}

const IMAGE_SIZE = 240;

export const ReportPlate: FC<ReportPlateProps> = ({ selectedFoods }) => {
  const { carbs, fruitVeg, protein } = selectedFoods;

  return (
    <div className="relative">
      <div className="absolute inset-0">
        {carbs && (
          <FoodSlot
            food={carbs}
            className="absolute left-[35%] top-[30%] z-20 scale-75"
          />
        )}
        {fruitVeg && (
          <FoodSlot
            food={fruitVeg}
            className="absolute left-[-15%] top-[15%] z-10 scale-[55%]"
          />
        )}
        {protein && (
          <FoodSlot
            food={protein}
            className="absolute left-[25%] top-[10%] z-0 scale-75"
          />
        )}
      </div>
      <Image
        src="/assets/images/plate.webp"
        alt="plate"
        height={IMAGE_SIZE}
        width={IMAGE_SIZE}
        className="-z-10"
      />
    </div>
  );
};

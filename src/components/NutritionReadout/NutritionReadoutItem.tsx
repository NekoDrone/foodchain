import { FC } from "react";
import { NutritionTypes, NutritionTypesUnit } from "@/shared/entities";
import { DottedLine } from "@/svgs/DottedLine";

interface ItemProps {
  type: NutritionTypes;
  value: number;
}

export const NutritionReadoutItem: FC<ItemProps> = ({ type, value }) => {
  const unit = NutritionTypesUnit[type];

  return (
    <div className="flex items-center p-1">
      <strong className="w-32">{capitaliseString(type)}</strong>
      <DottedLine />
      <p className="pl-3">{Math.round(value)}</p>
      <p className="pl-1">{unit}</p>
    </div>
  );
};

const capitaliseString = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

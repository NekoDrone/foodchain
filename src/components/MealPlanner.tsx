import { Plate } from "@/components/Plate";
import { FoodCategory } from "@/components/FoodCategory";
import { FoodTypes } from "@/shared/entities";

export const MealPlanner = () => {
  return (
    <div className="flex w-auto justify-center gap-64 align-middle">
      <Plate />
      <div className="h-750 grid auto-rows-max grid-rows-3 justify-between align-middle">
        <FoodCategory category={FoodTypes.MeatProtein} />
        <FoodCategory category={FoodTypes.Carbs} />
        <FoodCategory category={FoodTypes.VegFruit} />
      </div>
    </div>
  );
};

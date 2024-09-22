import { Plate } from "@/components/Plate/Plate";
import { CategoryContainer } from "@/components/CategoryContainer/CategoryContainer";

export const MealPlanner = () => {
  return (
    <div className="flex w-auto justify-center gap-64 align-middle">
      <Plate />
      <div className="h-750 grid auto-rows-max grid-rows-3 justify-between align-middle">
        <CategoryContainer />
      </div>
    </div>
  );
};

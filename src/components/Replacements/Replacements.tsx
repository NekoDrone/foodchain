import { MOCK_HEALTHY } from "@/shared/mocks";
import { NotificationFoodData } from "@/shared/functions/api";
import { FC } from "react";
import { ReplacementItem } from "@/components/Replacements/ReplacementItem";

interface ReplacementsProps {
  selectedFoods: NotificationFoodData;
}

export const Replacements: FC<ReplacementsProps> = ({ selectedFoods }) => {
  const {
    carbs: selectedCarbs,
    protein: selectedProtein,
    fruitVeg: selectedFruitVeg,
  } = selectedFoods;

  return (
    <div className="rounded-3xl bg-[#f7f7f7cc] stroke-2 p-4 outline outline-[10px] outline-[#f7f7f7]">
      {!selectedCarbs.isHealthy && (
        <ReplacementItem
          healthy={MOCK_HEALTHY.carbs}
          selected={selectedCarbs}
        />
      )}
      {!selectedProtein.isHealthy && (
        <ReplacementItem
          healthy={MOCK_HEALTHY.protein}
          selected={selectedProtein}
        />
      )}
      {!selectedFruitVeg.isHealthy && (
        <ReplacementItem
          healthy={MOCK_HEALTHY.fruitVeg}
          selected={selectedFruitVeg}
        />
      )}
    </div>
  );
};

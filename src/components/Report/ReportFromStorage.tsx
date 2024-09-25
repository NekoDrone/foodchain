import { FC } from "react";
import { NotificationFoodData } from "@/shared/functions/api";
import { Report } from "@/components/Report/Report";
import { useSessionStorage } from "@/shared/functions/sessionStorage";

export const ReportFromStorage: FC = () => {
  const selectedFoods: NotificationFoodData =
    JSON.parse(useSessionStorage("selectedFoods")) ?? {};

  return <Report selectedFoods={selectedFoods} />;
};

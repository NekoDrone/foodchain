import { FC } from "react";
import { useNotificationQuery } from "@/shared/functions/api";
import { Report } from "@/components/Report/Report";

interface WithNotifProps {
  notificationId: string;
}

export const ReportWithNotif: FC<WithNotifProps> = ({ notificationId }) => {
  const { data: selectedFoods } = useNotificationQuery(notificationId);

  return selectedFoods && <Report selectedFoods={selectedFoods} />;
};

"use client";

import { useSearchParams } from "next/navigation";
import { ReportWithNotif } from "@/components/Report/ReportWithNotif";
import { ReportFromStorage } from "@/components/Report/ReportFromStorage";

const ReportPage = () => {
  const searchParams = useSearchParams();
  const notificationId = searchParams.get("notification");

  return notificationId ? (
    <ReportWithNotif notificationId={notificationId} />
  ) : (
    <ReportFromStorage />
  );
};

export default ReportPage;

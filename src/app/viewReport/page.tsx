"use client";

import { useSearchParams } from "next/navigation";
import { ReportWithNotif } from "@/components/Report/ReportWithNotif";
import { ReportFromStorage } from "@/components/Report/ReportFromStorage";
import { Suspense } from "react";

const ReportPage = () => {
  const searchParams = useSearchParams();
  const notificationId = searchParams.get("notification");

  return notificationId ? (
    <ReportWithNotif notificationId={notificationId} />
  ) : (
    <ReportFromStorage />
  );
};

const ReportSuspense = () => {
  return (
    <Suspense>
      <ReportPage />
    </Suspense>
  );
};

export default ReportSuspense;

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
      <div className="flex min-h-screen flex-col items-center justify-center align-middle">
        <ReportPage />
      </div>
    </Suspense>
  );
};

export default ReportSuspense;

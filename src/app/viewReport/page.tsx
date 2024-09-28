"use client";

import { useRouter, useSearchParams } from "next/navigation";
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

  const router = useRouter()
  
  return (
    <Suspense>
      <div className="flex min-h-screen flex-col items-center justify-center align-middle scale-[88%]">
        <ReportPage />
      </div>
      <button className="bg-white w-50 h-50 opacity-0" onClick={() => router.replace("/")}>Back to beginning</button>
    </Suspense>
  );
};

export default ReportSuspense;

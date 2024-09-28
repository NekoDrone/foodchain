"use client"

import { useRouter } from "next/navigation";

const RemindConfirmPage = () => {
  
  const router = useRouter()
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 align-middle">
      <h1 className="text-8xl font-bold">Thank you!</h1>
      <p className="text-xl">We&apos;ll send you a reminder in a few days!</p>
      <button className="bg-white w-50 h-50 opacity-0" onClick={() => router.replace("/")}>Back to beginning</button>
    </div>
  );
};

export default RemindConfirmPage;

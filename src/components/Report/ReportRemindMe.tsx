import { useRouter } from "next/navigation";

export const ReportRemindMe = () => {
  const router = useRouter();

  return (
    <button
      className="h-16 w-56 rounded-full bg-[#f7f7f7] text-xl font-bold drop-shadow-lg"
      onClick={() => router.replace("/remind")}
    >
      Remind Me
    </button>
  );
};

"use client";

import { useSearchParams } from "next/navigation";
import { MealPlanner } from "@/components/MealPlanner";

const Home = () => {
  const searchParams = useSearchParams();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <MealPlanner />
    </div>
  );
};

export default Home;

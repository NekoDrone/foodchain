"use client";

import { useSessionStorage } from "@/shared/functions/sessionStorage";
import { NotificationFoodData } from "@/shared/functions/api";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const ReminderForm = () => {
  const selectedFoods = JSON.parse(
    useSessionStorage("selectedFoods"),
  ) as NotificationFoodData;

  const [inputError, setInputError] = useState(false);

  const [showError, setShowError] = useState(false);

  const router = useRouter();

  if (
    selectedFoods.carbs == undefined ||
    selectedFoods.protein == undefined ||
    selectedFoods.fruitVeg == undefined
  )
    return <></>;

  const handleSubmit = async (e: FormData) => {
    const formData = e.get("mobile");
    if (formData == null || formData == "") return;
    const mobile = "+65" + formData;
    // await registerNewNotification(mobile, selectedFoods);
    console.log(`Registered new number ${mobile}`);
    router.replace("/remind/confirm");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = /^[89]\d{7}$/;
    const input = e.target.value;
    if (!regex.test(input)) setInputError(true);
    else setInputError(false);
  };

  const handleUnfocus = () => {
    if (inputError) setShowError(true);
    else setShowError(false);
  };

  return (
    <>
      <p className="pb-2 text-red-600">
        {showError && "You must input a valid phone number."}
      </p>
      <form action={handleSubmit} className="flex flex-col items-center gap-8">
        <div className="flex max-w-[462px] rounded-xl bg-[#f7f7f7] text-2xl outline outline-4 outline-black">
          <div className="flex gap-2 pb-4 pr-16 pt-4">
            <p className="pl-4">+65</p>
            <input
              type="text"
              placeholder="81234567"
              name="mobile"
              className="bg-[#f7f7f7] [appearance:textfield]"
              onChange={handleChange}
              onBlur={handleUnfocus}
            />
          </div>
          {showError && (
            <Image
              src="/assets/images/red-exclaim.webp"
              alt="red-exlclaim"
              height={0}
              width={64}
              className="scale-50"
            />
          )}
        </div>
        <button
          type="submit"
          className="h-16 w-56 rounded-full bg-[#f7f7f7] text-xl font-bold drop-shadow-lg"
          disabled={inputError || showError}
        >
          Send
        </button>
      </form>
    </>
  );
};

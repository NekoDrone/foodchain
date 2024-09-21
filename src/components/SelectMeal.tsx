"use client";

const IMAGE_SIZE = 50;

// not implemented for initial prototype

import Image from "next/image";

export const SelectMeal = () => {
  return (
    <div className="flex min-h-0">
      <p>Select your meal</p>
      <div className="grid gap-2">
        <Image
          src="/assets/images/breakfast.webp"
          alt="breakfast"
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        ></Image>
        <Image
          src="/assets/images/lunch.webp"
          alt="lunch"
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        ></Image>
        <Image
          src="/assets/images/dinner.webp"
          alt="dinner"
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
        ></Image>
      </div>
    </div>
  );
};

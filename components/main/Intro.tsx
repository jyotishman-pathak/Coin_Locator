import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function Intro() {
  return (
    <BackgroundBeamsWithCollision>
        <div className="flex flex-col">
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        Find Your Next Crypto Gem
      </h2>
     

      <p className="mt-4 text-lg text-center text-gray-700 dark:text-gray-300 font-medium">
        Track, Discover, and Locate the Best Coins Instantly.
      </p>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

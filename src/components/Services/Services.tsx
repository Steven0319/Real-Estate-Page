"use client";

import { Transition } from "../Transition";
import { Slider } from "./Slider";

export function Services() {
  return (
    <Transition className="grid px-4 py-8 md:py-46 md:px-36 md:grid-cols-2 md:gap-28">
      {/* Columna 1: Texto */}
      <div className="max-w-xl mb-7">
        <h4 className="text-secondary">Services</h4>
        <h2 className="my-4 text-3xl font-semibold">
          List your property to rent or sell it at the best possible price!
        </h2>
        <p className="mb-10 mt-7">
          Looking to rent or sell your property? Showcase your home to thousands
          of potential buyers and renters actively searching for their next move.
          With our platform, your property gets the exposure it deserves — fast,
          easy, and at the best market value. Whether it is a cozy apartment or a
          luxurious villa, we help you close the deal quickly and securely. Start
          promoting your property today and get the best offer!
        </p>
      </div>

      {/* Columna 2: Slider */}
      <div className="flex items-center justify-center">
        <Slider />
      </div>
    </Transition>
  );
}
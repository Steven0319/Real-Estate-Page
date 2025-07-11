"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Transition } from "../Transition";
import { dataProperties } from "./Properties.data";
import {
  LiaBathSolid,
  LiaBedSolid,
  LiaRulerCombinedSolid,
  LiaStarSolid,
} from "react-icons/lia";
import Image from "next/image";
import { formatPrice } from "@/utils/formatPrice";

const Properties = () => {
  const [counterHouses, setCounterHouses] = useState(8);
  const dataFilteredHouses = dataProperties.slice(0, counterHouses);

  const loadMoreHouses = () => {
    setCounterHouses(counterHouses + 4);
  };

  return (
    <Transition className="px-4 my-12 md:py-28 md:px-36">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {dataFilteredHouses.map(
          ({ id, location, price, bedrooms, bathroom, image, star, meters }) => (
            <Link
              key={id}
              href={`/properties/${id}`}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative">
                <div className="absolute top-3 right-3 z-10 flex items-center px-2 py-1 text-sm bg-white rounded-full text-secondary shadow-sm">
                  <LiaStarSolid className="mr-1" />
                  <span className="font-medium">{star}</span>
                </div>

                <Image
                  src={`/assets/properties/${image}`}
                  alt={location}
                  width={300}
                  height={200}
                  className="w-full h-[180px] object-cover"
                />
              </div>

              <div className="px-4 py-4">
                <p className="text-sm text-secondary mb-1">{location}</p>
                <p className="text-base font-semibold mb-3">
                  {formatPrice(price)}
                </p>

                <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-gray-100">
                    <LiaBedSolid />
                    {bedrooms}
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-gray-100">
                    <LiaBathSolid />
                    {bathroom}
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-gray-100">
                    <LiaRulerCombinedSolid />
                    {meters} m²
                  </div>
                </div>
              </div>
            </Link>
          )
        )}
      </div>

      {counterHouses < dataProperties.length && (
        <div className="flex justify-center mt-10">
          <button
            className="bg-secondary hover:bg-black text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors"
            onClick={loadMoreHouses}
          >
            View more properties
          </button>
        </div>
      )}
    </Transition>
  );
};

export default Properties;
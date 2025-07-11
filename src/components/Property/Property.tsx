import { formatPrice } from "@/utils/formatPrice";
import {
  LiaBathSolid,
  LiaBedSolid,
  LiaRulerCombinedSolid,
  LiaStarSolid,
} from "react-icons/lia";
import { TfiLocationPin } from "react-icons/tfi";
import { PropertyProps } from "./Property.types";
import Image from "next/image";
import { Form } from "../Form";

export function Property(props: PropertyProps) {
  const { house } = props;

  return (
    <main className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      <div className="grid md:grid-cols-[65%,1fr] gap-10">
        {/* Info de la propiedad */}
        <div>
          <h1 className="text-3xl font-semibold text-secondary mb-3 flex justify-between items-center">
            <span>House {house.id}</span>
            <span className="text-xl text-gray-700 dark:text-gray-100">{formatPrice(house.price)}</span>
          </h1>

          <div className="flex flex-wrap gap-4 items-center mb-6">
            <h2 className="flex items-center gap-2 text-lg text-gray-700 dark:text-gray-100">
              <TfiLocationPin className="text-secondary" />
              {house.location}
            </h2>
            <div className="flex items-center px-2 py-1 rounded-md bg-secondary text-white text-sm font-medium">
              <LiaStarSolid className="text-base" />
              <span className="ml-1">{house.star}</span>
            </div>
          </div>

          <Image
            src={`/assets/properties/${house.image}`}
            alt={`House in ${house.location}`}
            width={1200}
            height={800}
            className="w-full h-auto rounded-2xl shadow-md"
            priority
          />

          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-200/60 dark:bg-slate-700/40 rounded-lg">
              <LiaBedSolid className="text-xl text-secondary" />
              <span className="text-sm font-medium">{house.bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-200/60 dark:bg-slate-700/40 rounded-lg">
              <LiaBathSolid className="text-xl text-secondary" />
              <span className="text-sm font-medium">{house.bathroom} Bathrooms</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-gray-200/60 dark:bg-slate-700/40 rounded-lg">
              <LiaRulerCombinedSolid className="text-xl text-secondary" />
              <span className="text-sm font-medium">{house.meters} m²</span>
            </div>
          </div>

          <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">{house.description}</p>
        </div>

        {/* Formulario */}
        <Form />
      </div>
    </main>
  );
}
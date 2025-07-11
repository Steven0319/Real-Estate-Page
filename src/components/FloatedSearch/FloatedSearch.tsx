import { SearchButton } from "../SearchButton";
import { SearchLocation } from "../SearchLocation";
import { SearchPriceRange } from "../SearchPriceRange";
import { SearchProperty } from "../SearchProperty";
import { Transition } from "../Transition";

export function FloatedSearch() {
  return (
    <Transition className="absolute bottom-10 md:-bottom-10 left-0 right-0 w-[75%] mx-auto">
      <div className="flex flex-col items-center md:flex-row justify-between gap-4 py-4 px-3 bg-white rounded-md backdrop-blur shadow-light">
        <SearchLocation />
        <SearchProperty />
        <SearchPriceRange />
        <SearchButton />
      </div>
    </Transition>
  );
}
import { useState } from "react";
import { GrFormDown, GrTag, GrFormUp } from "react-icons/gr";

export function SearchPriceRange() {
    const [isOpen, setIsOpen] = useState(false)

    return (
            <div className="relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between curson-pointer" onClick={()=> setIsOpen(!isOpen)}>
                <GrTag/>
                <div>
                    <p>Range of price</p>
                    <p className="text-xs">Select your range of prices</p>
                </div>
                {isOpen ? (
                    <GrFormUp/>
                ):(
                    <GrFormDown/>
                )}
                {isOpen && (
                    <div className="absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0">
                        <p>Any range</p>
                        <p>0 - 1000</p>
                        <p>1000 - 2000</p>
                        <p>2000 - 3000</p>
                        <p>3000 - 4000</p>
                        <p>4000 - 5000</p>
                        <p>5000 - 6000</p>
                        <p>6000 - 7000</p>
                        <p>7000 - 8000</p>
                        <p>8000 - 9000</p>
                        <p>9000 - 10000</p>
                        <p>10000 - 15000</p>
                        <p>15000 - 20000</p>
                        <p>20000 - 25000</p>
                        <p>25000 - 30000</p>
                    </div>
                )}
            </div>
        )
}

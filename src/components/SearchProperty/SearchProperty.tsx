import { useState } from "react";
import { GrFormDown, GrHome, GrFormUp } from "react-icons/gr";

export function SearchProperty() {
    const [isOpen, setIsOpen] = useState(false)

    return (
            <div className="relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between curson-pointer" onClick={()=> setIsOpen(!isOpen)}>
                <GrHome/>
                <div>
                    <p>Property</p>
                    <p className="text-xs">Select your type of property</p>
                </div>
                {isOpen ? (
                    <GrFormUp/>
                ):(
                    <GrFormDown/>
                )}
                {isOpen && (
                    <div className="absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0">
                        <p>House</p>
                        <p>Chalet</p>
                        <p>Shared room</p>
                        <p>Flat</p>
                        <p>Suit</p>
                        <p>Rent room</p>
                        <p>Single room</p>
                        <p>Duplex</p>
                        <p>Studio</p>
                        <p>Apartment</p>
                        <p>Villa</p>
                        <p>Loft</p>
                        <p>Attic</p>
                        <p>Building</p>
                        <p>Commercial premises</p>
                        <p>Office</p>
                    </div>
                )}
            </div>
        )
}
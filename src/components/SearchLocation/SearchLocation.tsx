import { useState } from 'react'
import { GrFormDown, GrLocation, GrFormUp } from 'react-icons/gr'

export function SearchLocation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between curson-pointer" onClick={()=> setIsOpen(!isOpen)}>
            <GrLocation/>
            <div>
                <p>Location</p>
                <p className="text-xs">Select your location</p>
            </div>
            {isOpen ? (
                <GrFormUp/>
            ):(
                <GrFormDown/>
            )}
            {isOpen && (
                <div className="absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0">
                    <p>Barcelona</p>
                    <p>Madrid</p>
                    <p>Valencia</p>
                    <p>Mallorca</p>
                    <p>Barcelona</p>
                    <p>Valencia</p>
                    <p>Islas Canarias</p>
                    <p>Zaragosa</p>
                    <p>Bilbao</p>
                    <p>Granada</p>
                    <p>Sevilla</p>
                    <p>Malaga</p>
                </div>
            )}
        </div>
    )
}

import { Transition } from "../Transition"
import Image from "next/image";

export function About() {
    return (
        <Transition className="grid  px-4 py-8 gap-4 md:py-44 md:px-36 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center max-w-xl mb-7" id="about">
                <h4 className="text-secondary">About Us</h4>
                <h2 className="my-4 text-3xl font-semibold">Explore over 2,000 homes for sale and purchase across Spain — your next move starts here!</h2>
                <p className="mb-10 mt-7">Discover over 2,000 exceptional properties available for sale across Spain. From charming coastal villas to modern city apartments, we offer the largest and most trusted real estate network since 2005. Whether you are buying your dream home or selling at the best market price, our platform connects you with serious buyers and sellers quickly and efficiently. Start your journey with us today — your ideal property is just a click away.</p>
                <button className="px-4 py-3 text-white transition-all duration-200 rounded-lg bg-secondary hover:bg-black">Load more</button>
            </div>
            <div className="flex items-center justify-center">
                <Image src="/assets/house.jpeg" alt="About" width={350} height={450} className="w-auto h-auto" priority/>
            </div>
        </Transition>
    )
}

import { FloatedSearch } from "../FloatedSearch";

export function Banner() {
    return (
        <div className="container relative mx-auto">
            <div className="pt-20 md:pt-0 min-h-[80vh] bg-banner bg-no-repeat bg-cover bg-center rounded-3xl relative flex flex-col items-center md:justify-center">
                <div className="max-w-3xl text-center text-white">
                    <h2 className="text-5xl font-semibold">Discover the ideal home for your family throughout Spain</h2>
                    <p className="mt-2 text-xl md:mt-8">With more than 20 years of experience, Steven.RealState offers top professionals to help you with everything you need</p>
                </div>
                <FloatedSearch/>
            </div>
        </div>
    )
}

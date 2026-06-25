import biographies from "@/data/aboutUs.json";
import HomeEventCard from "@/components/HomeEventCard";

export default function AboutUs() {
    return (
        <>
            <div className="px-8 md:px-[8%]">
                <h1 className="text-center text-4xl font-bold py-14">About Us</h1>
                <div className="flex flex-col gap-6 max-w-[80rem] mx-auto">
                    {biographies.map((biog) => (
                        <HomeEventCard key={biog.id} event={biog} />
                    ))}
                </div>
            </div>
        </>
    );
};
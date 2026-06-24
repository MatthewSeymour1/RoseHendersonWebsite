import biographies from "@/data/aboutUs.json";
import HomeEventCard from "@/components/HomeEventCard";

export default function AboutUs() {
    return (
        <>
            <h1 className="text-center text-4xl font-bold py-14">About Us</h1>
            <div className="flex flex-col gap-6 px-8 max-w-[80rem] mx-auto">
                {biographies.map((biog) => (
                    <HomeEventCard key={biog.id} event={biog} />
                ))}
            </div>
        </>

    );
};
import biographies from "@/data/aboutUs.json";
import HomeEventCard from "@/components/HomeEventCard";

export default function AboutUs() {
    return (
        <>
            <h1>This is About Us</h1>
            <div>test</div>
            <div className="flex flex-col gap-6 p-8">
                {biographies.map((biog) => (
                    <HomeEventCard key={biog.id} event={biog} />
                ))}
            </div>
        </>

    );
};
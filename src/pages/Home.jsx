import events from "@/data/home.json";
import HomeEventCard from "@/components/HomeEventCard";

export default function Home() {
    return (
        <>
            <div className="px-8 md:px-[8%]">
                <h1 className="text-center text-4xl font-bold py-14">Home</h1>
                <div className="flex flex-col gap-6 max-w-[80rem] mx-auto">
                    {events.map((event) => (
                        <HomeEventCard key={event.id} event={event} />
                    ))}
                </div>
            </div>
        </>
    );
};
import events from "@/data/home.json";
import HomeEventCard from "@/components/HomeEventCard";

export default function Home() {
    return (
        <>
            <h1 className="text-center text-4xl font-bold py-14">Home</h1>
            <div className="flex flex-col gap-6 px-8 max-w-[92rem] mx-auto">
                {events.map((event) => (
                    <HomeEventCard key={event.id} event={event} />
                ))}
            </div>
        </>

    );
};
import events from "@/data/homeEvents.json";
import HomeEventCard from "@/components/HomeEventCard";

export default function Home() {
    return (
        <>
            <h1>This is Home</h1>
            <div>test</div>
            <div className="flex flex-col gap-6 p-8">
                {events.map((event) => (
                    <HomeEventCard key={event.id} event={event} />
                ))}
            </div>
        </>

    );
};
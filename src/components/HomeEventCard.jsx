import { Card, CardContent } from "@/components/ui/card";

export default function HomeEventCard({ event }) {
    return (
        <Card className="w-full">
            <CardContent>
                <div className="flex gap-6">
                    <img
                        src={event.image}
                        alt={event.title}
                        className="w-100 h-100 object-cover rounded-md shrink-0 self-start"
                    />
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-3xl">{event.title}</p>
                        <p className="text-muted-foreground">{event.date}</p>
                        <p className="text-muted-foreground text-lg leading-relaxed">{event.description}</p>
                        {event.ticketsUrl && (
                            <a
                                href={event.ticketsUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-lg font-medium underline underline-offset-4 hover:text-muted-foreground transition-colors w-fit"
                            >
                                Buy Tickets
                            </a>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
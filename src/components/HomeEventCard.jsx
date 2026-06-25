import { Card, CardContent } from "@/components/ui/card";

export default function HomeEventCard({ event }) {
    return (
        <Card className="w-full">
            <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                    <img
                        src={event.image}
                        alt={event.alt}
                        className="w-80 object-cover rounded-md shrink-0 self-center md:self-start"
                    />
                    <div className="flex flex-col gap-2">
                        <p className="font-bold text-3xl">{event.title}</p>
                        {event.date && (
                            <p className="text-muted-foreground">{event.date}</p>
                        )}
                        <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">{event.description}</p>
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




// import { Card, CardContent } from "@/components/ui/card";

// export default function HomeEventCard({ event }) {
//     return (
//         <Card className="w-full">
//             <CardContent>
//                 <div className="flex flex-col md:flex-row gap-6">
//                     {event.id % 2 === 1 && (
//                         <img
//                             src={event.image}
//                             alt={event.alt}
//                             className="w-80 object-cover rounded-md shrink-0 self-start"
//                         />
//                     )}

//                     <div className="flex flex-col gap-2">
//                         <p className="font-bold text-3xl">{event.title}</p>
//                         {event.date && (
//                             <p className="text-muted-foreground">{event.date}</p>
//                         )}
//                         <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">{event.description}</p>
//                         {event.ticketsUrl && (
//                             <a
//                                 href={event.ticketsUrl}
//                                 target="_blank"
//                                 rel="noreferrer"
//                                 className="text-lg font-medium underline underline-offset-4 hover:text-muted-foreground transition-colors w-fit"
//                             >
//                                 Buy Tickets
//                             </a>
//                         )}
//                     </div>

//                     {event.id % 2 === 0 && (
//                         <img
//                             src={event.image}
//                             alt={event.alt}
//                             className="w-80 object-cover rounded-md shrink-0 self-start"
//                         />
//                     )}
//                 </div>
//             </CardContent>
//         </Card>
//     );
// }
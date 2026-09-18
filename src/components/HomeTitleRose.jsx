import { Card, CardContent } from "@/components/ui/card";

export default function HomeTitleRose() {
    return (
        <Card className="w-full shadow-none ring-0">
            <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                    <img
                        src={"images/roseHendersonMainHome.jpg"}
                        alt={"Picture of Rose Henderson"}
                        className="w-150 object-cover rounded-md shrink-0 self-center md:self-start"
                    />
                    <div className="flex flex-col gap-2">
                        <h3 className="fontSerif text-8xl">Rose Henderson</h3>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}



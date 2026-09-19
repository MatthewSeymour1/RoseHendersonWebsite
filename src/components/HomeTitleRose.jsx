import { Card, CardContent } from "@/components/ui/card";

export default function HomeTitleRose() {
    return (
        <Card className="w-full shadow-none ring-0 pt-30 px-7 px-0">
            <CardContent className="px-0">
                <div className="flex flex-col md:flex-row gap-20 items-center">
                    <img
                        src={"images/roseHendersonMainHome.jpg"}
                        alt={"Picture of Rose Henderson"}
                        className="w-150 object-cover shrink-0 self-center md:self-start"
                    />
                    <div className="flex flex-col gap-9">
                        <h3 className="fontSerif text-8xl">Rose Henderson</h3>
                        <p className="fontSerif text-3xl leading-normal">Emma is an Irish actress working in theatre, film and television.</p>
                        <p className="fontSerif text-3xl leading-normal">Her career has covered screen work from international films to local productions and theatre work including classical and contemporary plays. She is an award-winning audiobook narrator and has an extensive body of voice work</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}



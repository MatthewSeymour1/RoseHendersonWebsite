import contacts from "@/data/contactUs.json";
import HomeEventCard from "@/components/HomeEventCard";

export default function ContactUs() {
    return (
        <>
            <div className="px-8 md:px-[8%]">
                <h1 className="text-center text-4xl font-bold py-14">Contact Us</h1>
                <div className="flex flex-col gap-6 max-w-[80rem] mx-auto">
                    {contacts.map((contact) => (
                        <HomeEventCard key={contact.id} event={contact} />
                    ))}
                </div>
            </div>
        </>
    );
};
import contacts from "@/data/contactUs.json";
import HomeEventCard from "@/components/HomeEventCard";

export default function ContactUs() {
    return (
        <>
            <h1>This is Contact Us</h1>
            <div>test</div>
            <div className="flex flex-col gap-6 p-8">
                {contacts.map((contact) => (
                    <HomeEventCard key={contact.id} event={contact} />
                ))}
            </div>
        </>

    );
};
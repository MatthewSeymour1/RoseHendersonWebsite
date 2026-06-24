import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const linkClass = (path) => cn(
        "text-xl font-medium transition-colors hover:text-foreground",
        location.pathname === path ? "text-foreground" : "text-muted-foreground"
    );

    return (
        <header className="border-b bg-background w-full sticky top-0 z-50">
            <div className="flex h-24 items-center justify-between px-8">
                <Link to="/" className="flex items-center gap-3">
                    <img
                        src="images/roseHendersonHeadshot.jpg"
                        alt=""
                        className="w-11 h-11 rounded-full object-cover object-top"
                    />
                    <span className="text-2xl font-semibold tracking-tight pb-1.5">
                        Rose Henderson Productions
                    </span>
                </Link>

                {/* Desktop links */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link to="/" className={linkClass("/")}>Home</Link>
                    <Link to="/about-us" className={linkClass("/about-us")}>About Us</Link>
                    <Link to="/contact-us" className={linkClass("/contact-us")}>Contact Us</Link>
                </nav>

                {/* Mobile burger */}
                <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <div className="cursor-pointer p-2">
                                <Menu className="size-6" />
                            </div>
                        </SheetTrigger>
                        <SheetContent side="right" showCloseButton={false}>
                            <SheetHeader className="flex-row items-center justify-between px-4 h-24 border-b">
                                <SheetTitle>Rose Henderson Productions</SheetTitle>
                                <SheetClose asChild>
                                    <div className="cursor-pointer p-2 hover:bg-secondary rounded-md">
                                        <XIcon className="size-6" />
                                    </div>
                                </SheetClose>
                            </SheetHeader>
                            <nav className="flex flex-col gap-4 mt-6 px-6">
                                <Link to="/" onClick={() => setOpen(false)} className={linkClass("/")}>Home</Link>
                                <Link to="/about-us" onClick={() => setOpen(false)} className={linkClass("/about-us")}>About Us</Link>
                                <Link to="/contact-us" onClick={() => setOpen(false)} className={linkClass("/contact-us")}>Contact Us</Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
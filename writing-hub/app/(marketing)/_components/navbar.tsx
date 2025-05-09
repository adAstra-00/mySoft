"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";

export const Navbar = () => {
    const scrolled = useScrollTop();

    return (
        <div className={cn("z-50 bg-background dark:bg-[#1F1F1F] top-0 flex items-center w-full p-2", scrolled && "border-b shadow-sm")}>
            <div id="logo">
                <Logo />
            </div>
            <div id="theme-mode" className="md:ml-auto md:justify-end justify-betweem flex items-center gap-x-2">
                <ModeToggle />
            </div>
        </div>
    )
}
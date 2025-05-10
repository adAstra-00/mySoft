"use client";

import { useEffect, useRef } from "react";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { Logo } from "./logo";
import { Spinner } from "@/components/spinner";


export const Navbar = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    const scrolled = useScrollTop();
    const navbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const navbar = navbarRef.current;
        if (navbar) {
            // Set the CSS variable dynamically
            document.documentElement.style.setProperty("--navbar-height", `${navbar.offsetHeight}px`);
        }
    }, []);

    useEffect(() => {
        console.log("isAuthenticated:", isAuthenticated, "isLoading:", isLoading);
    }, [isAuthenticated, isLoading]);

    return (
        <div id="navbar" ref={navbarRef} className={cn("z-50 bg-background dark:bg-[#1F1F1F] flex items-center w-full p-2 bg-red-400", scrolled && "border-b shadow-sm")}>
            <div id="logo">
                <Logo showText={false} />
            </div>
            <div id="theme-mode" className="md:ml-auto md:justify-end justify-betweem flex items-center gap-x-2">
                {isLoading && (<Spinner />)}
                {!isAuthenticated && !isLoading && (
                    <>
                        <SignInButton mode="modal">
                            <Button variant="ghost" size="sm">
                                Log in
                            </Button>
                        </SignInButton>
                        <SignInButton mode="modal">
                            <Button size="sm">
                                Get Jotion Free
                            </Button>
                        </SignInButton>
                    </>
                )}
                {isAuthenticated && !isLoading && (
                    <>
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/documents">
                                Enter Jotion
                            </Link>
                        </Button>
                        <UserButton
                            afterSignOutUrl="/"
                        />
                    </>
                )
                }
                <ModeToggle />
            </div>
        </div>
    )
}
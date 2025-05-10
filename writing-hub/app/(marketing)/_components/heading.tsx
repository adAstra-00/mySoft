"use client";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    return (
        <div className="flex flex-col flex-grow w-full items-center text-center place-content-evenly">
            <h1 className="font-bold">
                <span className="text-[1.5vw] mx-2">Your Ideas, Documents, Plans.</span> <span className="mx-2 text-[2vw] italic font-[Cedarville_Cursive]">Unified</span> <br />
                <span className="font-[Eagle_Lake] text-[2.5vw]">Welcome to <span className="underline">Jotion</span></span>
            </h1>
            <h3 className="font-medium text-[1.3vw]">
                Jotion is the connected workspace where better, faster work happens.
            </h3>
            {isLoading && (
                <div className="w-full flex items-center justify-center">
                    <Spinner size="lg" />
                </div>
            )}
            <div className="w-min">
                {isAuthenticated && !isLoading ? (
                    <Button>
                        Enter Jotion
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                ) : (
                    // Invisible placeholder to reserve space
                    <div>
                        <Button variant="outline">
                            Log in
                            <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
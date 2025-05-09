"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

 // i.e., not a server component, but a client component

export const Heading = () => {
    return (
        <div className="flex p-2 h-full">
            <div className="w-full">
                <h1 className="font-bold p-2" style={{fontSize: "clamp(1rem, 2vw, 2.5rem)", /*adjust min, preferred, max sizes*/ }}>
                    <span>Your Ideas, Documents, Plans.</span> <br/> <span className="italic font-[Cedarville_Cursive]">Unified</span> <br/>
                    <span className="font-[Eagle_Lake]">Welcome to <span className="underline">Jotion</span></span>
                </h1>
                <div className="flex flex-row items-center justify-center w-full">
                    <h3 className="font-medium m-2">
                    Jotion is the connected workspace where better, faster work happens.
                    </h3>
                    <Button className="m-2">
                        Enter Jotion
                        <ArrowRight className=" h-4 w-4 ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
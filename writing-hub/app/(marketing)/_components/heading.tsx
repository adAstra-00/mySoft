"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

 // i.e., not a server component, but a client component

export const Heading = () => {
    return (
        <div className="bg-orange-400 flex p-2 z-50">
            <div className="bg-yellow-200 w-full flex flex-col items-center">
                <h1 className="outline md:text-5xl lg:text-6xl font-bold m-5 p-5 leading-[1.5]" style={{
    fontSize: "clamp(1rem, 5vw, 3.5rem)", /*adjust min, preferred, max sizes*/ }}>
                    <span>Your Ideas, Documents, Plans.</span> <br/> <span className="italic font-[Cedarville_Cursive]">Unified</span> <br/>
                    <span className="text-red-400 font-[Eagle_Lake] space-y-50">Welcome to <span className="underline">Jotion</span></span>
                </h1>
                <h3 className="outline max-w-md text-blue-400 font-medium m-5">
                    Jotion is the connected workspace<br/> where better, faster work happens.
                </h3>
                <Button className="m-3">
                    Enter Jotion
                    <ArrowRight className=" h-4 w-4 ml-2" />
                </Button>
            </div>
        </div>
    )
}
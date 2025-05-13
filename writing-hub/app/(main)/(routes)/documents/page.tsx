"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

const DocumentsPage = () => {
    const { user } = useUser(); // extract user from useUser

    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image
                src="/empty.png"
                height="300"
                width="300"
                alt="Empty"
                className="dark:hidden"
            />
            <Image
                src="/empty-dark.png"
                height="300"
                width="300"
                alt="Empty"
                className="hidden dark:block"
            />
            <h2 className="text-lg font-medium">
                {user?.firstName
                    ? `Welcome to ${user.firstName}'s Jotion.`
                    : user?.username
                    ? `Welcome to ${user.username}'s Jotion.`
                    : "Welcome to your Jotion."
                }
            </h2>
            <Button>
                <PlusCircle className="h-4 w-4 mr-2"/>
                Create a note
            </Button>

        </div>
    );
}

export default DocumentsPage;
"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const DocumentsPage = () => {
    const { user } = useUser(); // extract user from useUser
    const create = useMutation(api.documents.create);

    const onCreate = () => {
        const promise = create({ title: "Untitled" });

        toast.promise(promise, {
            loading: "Creating note...",
            success: "New note created!",
            error: "Failed to create new note.",
        });
    };

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
            <Button onClick={onCreate} className="cursor-pointer">
                <PlusCircle className="h-4 w-4 mr-2" />
                Create a note
            </Button>

        </div>
    );
}

export default DocumentsPage;
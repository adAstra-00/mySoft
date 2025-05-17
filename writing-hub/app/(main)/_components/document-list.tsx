"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "@/convex/_generated/api";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { useQuery } from "convex/react";
import { FileIcon } from "lucide-react";
import { Item } from "./item";

interface DocumentListProps {
    parentDocumentId?: Id<"documents">;
    level?: number;
    data?: Doc<"documents">[];
}

// You need to define `DocumentList` as a standard React functional component, not as a function returning another function.
// export const DocumentList = ❌▶️ () => ◀️❌ ({
export const DocumentList = ({
    parentDocumentId,
    level = 0
}: DocumentListProps) => {
    const params = useParams();
    const router = useRouter();
    const [expanded, setExpanded] = useState<Record<string, boolean>>({}); // func of type "Record" which takes a str and a bool, and w empty obj inside

    const onExpand = (documentId: string) => { // will take the doc Id of the current doc we're trying to expand
        setExpanded(prevExpanded => ({
            ...prevExpanded, // add all the previous expanded documents
            [documentId]: !prevExpanded[documentId] // and find the individual doc Id and toggle the func, ie the opposite of the current state of the  doc Id inside the current func
        }));
    };

    const documents = useQuery(api.documents.getSidebar, {
        parentDocument: parentDocumentId
    });

    const onRedirect = (documentId: string) => {
        router.push(`/documents/${documentId}`);
    };

    // in convex, documents are only undefined if they're loading, so let's add a check:
    if (documents === undefined) {
        return (
            <>
                <Item.Skeleton level={level} />
                {level === 0 && (
                    <>
                        <Item.Skeleton level={level} />
                        <Item.Skeleton level={level} />
                    </>
                )}
            </>
        );
    };


    return (
        <>
            <p // use css to detect if this is the only element inside the entire fragment, if it's not, it's hidden by default
                style={{
                    paddingLeft: level ? `${(level * 12) + 25}px` : undefined
                }}
                className={cn(
                    "hidden text-sm font-medium text-muted-foreground/80",
                    expanded && "last:block", // if it's expanded
                    level === 0 && "hidden" //otherwise, if level is 0
                )}
            >
                No pages inside
            </p>
            {documents.map((document) => (
                <div key={document._id}>
                    <Item
                        id={document._id}
                        onClick={() => onRedirect(document._id)}
                        label={document.title}
                        icon={FileIcon}
                        documentIcon={document.icon}
                        active={params.documentId === document._id}
                        level={level}
                        onExpand={() => onExpand(document._id)}
                        expanded={expanded[document._id]}
                    />

                    {/* 🔽 every <Item/> can have a child of its own so we'll use recursive calling: 
                    we're calling the component DocumentList from within the code of DocumentList itself;
                    it will be called conditionally to avoid falling into infinite looping 🔽 */}
                    {expanded[document._id] && ( // ◀️ if expanded obj which we hold in our state holds the doc Id and the value is true
                        <DocumentList // ◀️ then we will re-render the entire document list
                            parentDocumentId={document._id}
                            level={level + 1}
                        />
                    )}

                </div>
            ))}
        </>
    )
}

// stopped at 16:20
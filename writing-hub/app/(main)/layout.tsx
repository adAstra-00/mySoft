"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { useState } from "react";

import { Spinner } from "@/components/spinner";

import { Navigation } from "./_components/navigation";
import { SearchCommand } from "@/components/search-command";
import { RightSidebar } from "./_components/RightSidebar";

const MainLayout = ({ //"Let's extract the children"
    children
}: { //"Let's give the children a type of ..."
    children: React.ReactNode
}) => { //add some hooks here
    // since logic is inside of layout file and not specific page every route inside of our (main) app is now auth protected
    const { isAuthenticated, isLoading } = useConvexAuth();

    // Add state to control right sidebar collapsed/expand
    const [isRightSidebarCollapsed, setIsRightSidebarCollapsed] = useState(false);

    if (isLoading) {
        return (
            <div className="h-full flex items-center justify-center">
                <Spinner size="lg" />
            </div>
        )
    }
    if (!isAuthenticated) {
        return redirect("/");
    }

    // Handler to expand right sidebar
    const handleExpandRightSidebar = () => setIsRightSidebarCollapsed(false);

    return (
        <div className="h-full flex dark:bg-[#1F1F1F] relative">
            <Navigation />
            <main className="flex-1 h-full overflow-y-auto">
                <SearchCommand />
                {children} {/* "let's render the children" */}
            </main>
            <RightSidebar
                isCollapsed={isRightSidebarCollapsed}
                onCollapse={() => setIsRightSidebarCollapsed(true)}
                onExpand={handleExpandRightSidebar}
            />
        </div>
    );
}

export default MainLayout;
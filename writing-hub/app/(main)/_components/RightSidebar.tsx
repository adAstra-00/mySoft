import { cn } from "@/lib/utils";
import { ChevronsRightIcon, MenuIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const initialWidgets = [
    { id: 1, label: "Widget 1" },
    { id: 2, label: "Widget 2" },
    { id: 3, label: "Widget 3" },
];

// Accept isCollapsed and onCollapse as props
export const RightSidebar = ({ isCollapsed, onCollapse, onExpand }: { isCollapsed: boolean, onCollapse: () => void, onExpand: () => void }) => {
    const isResizingRef = useRef(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const [isResetting, setIsResetting] = useState(false);
    const [width, setWidth] = useState(240);
    const [widgets, setWidgets] = useState(initialWidgets);
    const [isHovering, setIsHovering] = useState(false);
    const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
    const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

    // Collapse on mobile (simple approach)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768 && !isCollapsed) onCollapse();
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isCollapsed, onCollapse]);

    // Resizing logic
    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        isResizingRef.current = true;
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (event: MouseEvent) => {
        if (!isResizingRef.current) return;
        let newWidth = window.innerWidth - event.clientX;
        if (newWidth < 240) newWidth = 240;
        if (newWidth > 480) newWidth = 480;
        setWidth(newWidth);
    };

    const handleMouseUp = () => {
        isResizingRef.current = false;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    };

    // Wrapper hover handlers (for both sidebar and button)
    const handleWrapperMouseEnter = () => setIsHovering(true);
    const handleWrapperMouseLeave = () => setIsHovering(false);

    // Drag and drop handlers
    const handleDragStart = (index: number) => {
        setDraggedIndex(index);
    };

    const handleDragOver = (index: number, e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragOverIndex(index);
    };

    const handleDrop = (index: number) => {
        if (draggedIndex === null || draggedIndex === index) {
            setDraggedIndex(null);
            setDragOverIndex(null);
            return;
        }
        const newWidgets = [...widgets];
        const [removed] = newWidgets.splice(draggedIndex, 1);
        newWidgets.splice(index, 0, removed);
        setWidgets(newWidgets);
        setDraggedIndex(null);
        setDragOverIndex(null);
    };

    const handleDragEnd = () => {
        setDraggedIndex(null);
        setDragOverIndex(null);
    };

    return (
        <>
            {/* Expand button when sidebar is collapsed */}
            {isCollapsed && (
                <div className="fixed top-3 right-2 z-[99999] pointer-events-auto">
                    <MenuIcon
                        onClick={onExpand}
                        role="button"
                        className="h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 transition"
                        aria-label="Expand right sidebar"
                    />
                </div>
            )}
            <div className="relative h-full hidden md:flex flex-shrink-0" onMouseEnter={handleWrapperMouseEnter} onMouseLeave={handleWrapperMouseLeave}>
                {/* Sidebar */}
                <aside
                    ref={sidebarRef}
                    style={{
                        width: isCollapsed ? 0 : width,
                        minWidth: isCollapsed ? 0 : 240,
                        maxWidth: isCollapsed ? 0 : 480,
                        transition: isResetting ? "width 0.3s" : undefined,
                        right: 0,
                        borderLeft: "none", // Remove border except on hover
                    }}
                    className={cn(
                        "group/right-sidebar h-full bg-secondary overflow-y-auto relative flex flex-col z-[99999] flex-shrink-0"
                    )}
                >
                    {/* Header section mimicking left sidebar */}
                    {!isCollapsed && (
                        <div className="relative flex items-center justify-end h-14 p-3 bg-secondary select-none">
                            {/* Collapse button (top left of right sidebar) */}
                            <div
                                onClick={onCollapse}
                                role="button"
                                className="h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 left-2 opacity-0 group-hover/right-sidebar:opacity-100 transition"
                                aria-label="Collapse right sidebar"
                                tabIndex={0}
                                onKeyDown={e => { if (e.key === "Enter" || e.key === " ") onCollapse(); }}
                            >
                                <ChevronsRightIcon className="h-6 w-6" />
                            </div>
                            {/* Placeholder for user dropdown */}
                            <div className="flex items-center ml-10">
                                <div className="gap-x-2 flex items-center max-w-[150px]">
                                    <div className="h-5 w-5 rounded-full bg-muted" />
                                    <span className="font-medium line-clamp-1 text-muted-foreground text-sm">My Widgets</span>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* Resize handle (mimics left sidebar: invisible by default, visible on hover) */}
                    {!isCollapsed && (
                        <div
                            onMouseDown={handleMouseDown}
                            className="opacity-0 group-hover/right-sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 left-0 top-0 z-[10003]"
                        />
                    )}
                    {/* Simple widgets list with native drag-and-drop */}
                    <div className="flex-1 flex flex-col items-stretch gap-y-4 content-between p-4" style={{ minHeight: 240 }}>
                        {widgets.map((widget, idx) => (
                            <div
                                key={widget.id}
                                className={cn(
                                    "bg-muted rounded-lg shadow w-full p-4 border border-border",
                                    draggedIndex === idx && "opacity-50",
                                    dragOverIndex === idx && draggedIndex !== null && draggedIndex !== idx && "ring-2 ring-primary"
                                )}
                                style={{ minHeight: 80, cursor: "move" }}
                                draggable
                                onDragStart={() => handleDragStart(idx)}
                                onDragOver={e => handleDragOver(idx, e)}
                                onDrop={() => handleDrop(idx)}
                                onDragEnd={handleDragEnd}
                            >
                                <span className="font-semibold">{widget.label}</span>
                                <div className="text-xs text-muted-foreground mt-2">Widget placeholder</div>
                            </div>
                        ))}
                    </div>
                </aside>
            </div>
        </>
    );
}; 
import { useState, useEffect, useCallback } from "react";
import { DialogClose, DialogContent } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
import * as LucideIcons from "lucide-react"; // Import all icons from the lucide-icons package
import { useIconSettings } from "@/hooks";
import _ from "lodash";

export default function IconSelectorDialog() {
    const [loadedIcons, setLoadedIcons] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    // const [searchQuery, setSearchQuery] = useState("");

    const { updateIconSettings, addChanges } = useIconSettings();

    const fetchIcons = useCallback(() => {
        setLoading(true);
        // Get a slice of icons based on search query and page number
        const startIndex = (pageNumber - 1) * 20; // Assuming 20 icons per page
        const endIndex = startIndex + 20;
        const iconsToLoad = Object.keys(LucideIcons).slice(
            startIndex,
            endIndex
        );
        setLoadedIcons((prevIcons) => [...prevIcons, ...iconsToLoad]);
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
        setLoading(false);
    }, [pageNumber]);

    const handleScroll = useCallback(() => {
        // Detect if user has scrolled near the bottom of the page
        if (
            window.innerHeight + document.documentElement.scrollTop >=
            document.documentElement.scrollHeight - 100
        ) {
            fetchIcons();
        }
    }, [fetchIcons]);

    useEffect(() => {
        // Fetch initial icons when component mounts
        fetchIcons();
    }, [fetchIcons]);

    useEffect(() => {
        // Reset page number and load icons when search query changes
        setPageNumber(1);
        fetchIcons();
    }, [fetchIcons]);

    useEffect(() => {
        // Add scroll event listener when component mounts
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return (
        <DialogContent className="flex flex-col h-[95vh]">
            <div className="flex flex-col gap-2">
                <h3 className="text-md font-medium">Pick an Icon</h3>
                {/* <Input
                    placeholder="Search Icons ..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                /> */}
            </div>
            <div className="flex-1 overflow-y-scroll grid grid-cols-6 gap-4">
                {loadedIcons.map((iconName, index) => {
                    // @ts-ignore
                    const Icon = LucideIcons[iconName]!;
                    return (
                        <DialogClose key={index}>
                            <div
                                onClick={() => {
                                    updateIconSettings("icon", Icon);
                                    updateIconSettings("iconName", iconName);
                                    addChanges();
                                }}
                                className="h-14 w-14 bg-gray-100 grid place-content-center"
                            >
                                {Icon && <Icon size={30} />}
                            </div>
                        </DialogClose>
                    );
                })}
                {loading && <p>Loading...</p>}
            </div>
        </DialogContent>
    );
}

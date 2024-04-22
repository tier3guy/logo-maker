import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Download } from "lucide-react";

export default function DownloadButton() {
    return (
        <Popover>
            <PopoverTrigger>
                <div className="py-2 px-4 bg-yellow-400 font-semibold">
                    Download
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] me-4 text-sm font-semibold p-2 rounded-none">
                <div className="flex flex-col">
                    <button className="flex items-center justify-between p-3 hover:bg-gray-200">
                        <p>Download PNG</p>
                        <Download size={16} />
                    </button>
                    <button className="flex items-center justify-between p-3 hover:bg-gray-200">
                        <p>Download SVG</p>
                        <Download size={16} />
                    </button>
                </div>
            </PopoverContent>
        </Popover>
    );
}

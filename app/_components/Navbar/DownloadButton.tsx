import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Download } from "lucide-react";
import domToImage from "dom-to-image";

export default function DownloadButton() {
    const handleDownloadSvgButton = () => {
        // Get the SVG element
        const svgElement = document.querySelector("#__logo__");

        // Convert SVG element to XML string
        const svgXml = new XMLSerializer().serializeToString(svgElement!);

        // Create Blob from SVG XML
        const blob = new Blob([svgXml], { type: "image/svg+xml" });

        // Create URL for the Blob
        const url = URL.createObjectURL(blob);

        // Create a link element
        const link = document.createElement("a");

        // Set link attributes
        link.href = url;
        link.download = "logo.svg"; // Set desired file name

        // Simulate click to trigger download
        link.click();

        // Clean up
        URL.revokeObjectURL(url);
    };

    const handleDownloadPngButton = async () => {
        const imageElement = document.querySelector("#__logo__");
        const data = await domToImage.toPng(imageElement!);

        const link = document.createElement("a");
        link.download = "logo.png";
        link.href = data;
        link.click();
    };

    return (
        <Popover>
            <PopoverTrigger>
                <div className="py-2 px-4 bg-yellow-400 font-semibold">
                    Download
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] me-4 text-sm font-semibold p-2 rounded-none">
                <div className="flex flex-col">
                    <button
                        className="flex items-center justify-between p-3 hover:bg-gray-200"
                        onClick={handleDownloadPngButton}
                    >
                        <p>Download PNG</p>
                        <Download size={16} />
                    </button>
                    <button
                        className="flex items-center justify-between p-3 hover:bg-gray-200"
                        onClick={handleDownloadSvgButton}
                    >
                        <p>Download SVG</p>
                        <Download size={16} />
                    </button>
                </div>
            </PopoverContent>
        </Popover>
    );
}

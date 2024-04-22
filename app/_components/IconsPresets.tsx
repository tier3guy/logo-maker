import { cn } from "@/lib/utils";
import { Apple, Book, Pencil, Table2, Undo2 } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export default function IconsPresets() {
    return (
        <div className="flex items-center divide-x-[1px]">
            <div className="px-2">
                <button className="h-10 w-10 grid place-content-center hover:bg-gray-200">
                    <Undo2 />
                </button>
            </div>
            <div className="flex items-center gap-2 px-4">
                <p className="text-sm text-gray-400">Presets</p>
                <div className="flex items-center gap-2">
                    <Preset
                        icon={<Pencil />}
                        tooltipContent={
                            "Great for startups that want to look professional, serious and mordern. For example Nike and adidas."
                        }
                    />
                    <Preset
                        icon={<Apple />}
                        className="bg-gradient-to-r from-cyan-400 to-yellow-400 rounded-lg"
                    />
                    <Preset
                        icon={<Table2 />}
                        className="bg-gradient-to-r from-purple-600 via-red-600 to-yellow-400 rounded-2xl"
                        tooltipContent={
                            "Great for startups that want to look friendly and trendy. For example Instagram."
                        }
                    />
                    <Preset
                        icon={<Book />}
                        className="rounded bg-yellow-200 text-black"
                    />
                </div>
            </div>
        </div>
    );
}

interface IPreset {
    className?: string;
    icon: React.ReactNode;
    tooltipContent?: string | null;
}

export function Preset({ icon, className, tooltipContent = null }: IPreset) {
    return (
        <Tooltip>
            <TooltipTrigger>
                <div
                    className={cn(
                        "h-10 w-10 bg-black text-white grid place-content-center",
                        className
                    )}
                >
                    {icon}
                </div>
            </TooltipTrigger>
            {tooltipContent && (
                <TooltipContent>{tooltipContent}</TooltipContent>
            )}
        </Tooltip>
    );
}

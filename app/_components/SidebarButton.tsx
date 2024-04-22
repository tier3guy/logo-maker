import Button from "@/components/Button";
import { cn } from "@/lib/utils";

interface ISidebarButton {
    label: string;
    className?: string;
    active?: boolean;
}

export default function SidebarButton({
    label,
    className,
    active,
}: ISidebarButton) {
    return (
        <button
            className={cn(
                "hover:bg-gray-200 py-2 px-3 font-semibold text-start w-full",
                active && "bg-gray-200",
                className
            )}
        >
            {label}
        </button>
    );
}

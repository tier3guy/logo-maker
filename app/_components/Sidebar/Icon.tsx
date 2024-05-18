import { icons } from "lucide-react";
import { useIconSettings } from "@/hooks";

interface IconProps {
    name: keyof typeof icons;
}

const Icon = ({ name }: IconProps) => {
    const LucideIcon = icons[name];
    const { updateIconSettings } = useIconSettings();

    // Log the `icons` object and the `name` to debug
    console.log("Available icons:", icons);
    console.log("Requested icon name:", name);

    // Handle the case where the icon might not exist
    if (!LucideIcon) {
        console.error(
            `Icon with name "${name}" does not exist in the icons object.`
        );
        return null; // or return a fallback component
    }

    return (
        <button
            onClick={() => {
                updateIconSettings("icon", LucideIcon);
                updateIconSettings("iconName", name);
            }}
        >
            <LucideIcon size={20} color="#000" />
        </button>
    );
};

export default Icon;

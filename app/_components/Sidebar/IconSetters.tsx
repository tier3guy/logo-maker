import Slider from "@/components/Slider";
import { useIconSettings } from "@/hooks";
import { DialogContent, DialogTrigger } from "@/components/ui/dialog";
import IconSelectorDialog from "./IconSelectorDialog";
import ColorPicker from "@/components/ColorPicker";

export default function IconSetters() {
    return (
        <div className="flex flex-col gap-4">
            <IconContainer />
            <Customizer />
            <div className="flex flex-col gap-5 mt-4">
                <BorderCustomizer />
                <FillCustomizer />
            </div>
        </div>
    );
}

export function IconContainer() {
    const { icon } = useIconSettings();

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-gray-600">
                <p className="text-sm">Icon</p>
                <p className="text-xs">{icon.iconName}</p>
            </div>
            <div>
                <DialogTrigger>
                    <div className="h-12 w-12 grid place-content-center bg-gray-200">
                        <icon.icon />
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <IconSelectorDialog />
                </DialogContent>
            </div>
        </div>
    );
}

export function Customizer() {
    const { icon, updateIconSettings } = useIconSettings();

    return (
        <div className="flex flex-col gap-5">
            <Slider
                label="Size"
                valueLabel={icon.size + "px"}
                value={icon.size}
                onChange={(e) => {
                    updateIconSettings("size", parseInt(e.target.value));
                }}
                min={100}
                max={430}
            />
            <Slider
                label="Rotate"
                valueLabel={icon.rotation + "°"}
                value={icon.rotation}
                onChange={(e) => {
                    updateIconSettings("rotation", parseInt(e.target.value));
                }}
                min={-180}
                max={180}
            />
            <Slider
                label="Border Width"
                valueLabel={icon.borderWidth + "px"}
                value={icon.borderWidth}
                onChange={(e) => {
                    updateIconSettings("borderWidth", parseInt(e.target.value));
                }}
                min={0}
                max={10}
            />
        </div>
    );
}

export function BorderCustomizer() {
    const { icon, updateIconSettings, addChanges } = useIconSettings();
    return (
        <div className="flex flex-col gap-3">
            <p className="text-sm">Border Color</p>
            <div className="flex items-center justify-center">
                <ColorPicker picker="borderColor" />
            </div>
        </div>
    );
}

export function FillCustomizer() {
    const { icon, updateIconSettings, addChanges } = useIconSettings();
    return (
        <div className="flex flex-col gap-3">
            <p className="text-sm">Fill Color</p>
            <div className="flex items-center justify-center">
                <ColorPicker picker="fillColor" />
            </div>
        </div>
    );
}

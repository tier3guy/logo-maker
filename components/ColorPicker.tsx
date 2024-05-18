import { useIconSettings } from "@/hooks";
import { useEffect, useState } from "react";
// @ts-ignore
import CustomColorPicker from "react-best-gradient-color-picker";

interface ColorPickerProps {
    picker: "borderColor" | "fillColor" | "backgroundColor";
}

export default function ColorPicker({ picker }: ColorPickerProps) {
    const { icon, background, updateIconSettings, updateBackgroundSettings } =
        useIconSettings();
    const [color, setColor] = useState("rgba(255,255,255,1)");

    useEffect(() => {
        if (picker === "borderColor") {
            setColor(icon.borderColor);
        } else if (picker === "fillColor") {
            setColor(icon.fillColor);
        } else if (picker === "backgroundColor") {
            setColor(background.backgroundColor);
        }
    }, [picker, icon.borderColor, icon.fillColor, background.backgroundColor]);

    return (
        <div>
            <CustomColorPicker
                //@ts-ignore
                value={color}
                onChange={(color: string) => {
                    if (picker === "borderColor") {
                        updateIconSettings("borderColor", color);
                    } else if (picker === "fillColor") {
                        updateIconSettings("fillColor", color);
                    } else if (picker === "backgroundColor") {
                        updateBackgroundSettings("backgroundColor", color);
                    }
                }}
            />
        </div>
    );
}

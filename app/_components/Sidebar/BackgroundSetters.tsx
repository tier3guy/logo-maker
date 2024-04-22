import { useState } from "react";
import Slider from "@/components/Slider";
import { ChromePicker } from "react-color";
import { useIconSettings } from "@/hooks";

export default function BackgroundSetters() {
    return (
        <div className="flex flex-col gap-4">
            <Customizer />
            <div className="flex flex-col gap-5 mt-4">
                <BorderCustomizer />
            </div>
        </div>
    );
}

export function Customizer() {
    const { background, updateBackgroundSettings } = useIconSettings();
    const [shadow, setShadow] = useState<number>(0);
    const shadowMap: {
        [key: number]: string;
    } = {
        0: "none",
        1: "sm",
        2: "md",
        3: "lg",
        4: "xl",
        5: "2xl",
    };

    return (
        <div className="flex flex-col gap-5">
            <Slider
                label="Rounded"
                valueLabel={background.borderRadius + "px"}
                value={background.borderRadius}
                onChange={(e) => {
                    updateBackgroundSettings(
                        "borderRadius",
                        parseInt(e.target.value)
                    );
                }}
                min={0}
                max={300}
            />
            <Slider
                label="Padding"
                valueLabel={background.padding + "px"}
                value={background.padding}
                onChange={(e) => {
                    updateBackgroundSettings(
                        "padding",
                        parseInt(e.target.value)
                    );
                }}
                min={0}
                max={100}
            />
            <div className="flex flex-col gap-2">
                <Slider
                    label="Shadow"
                    valueLabel={background.shadow.toUpperCase()}
                    value={shadow}
                    onChange={(e) => {
                        setShadow(parseInt(e.target.value));
                        updateBackgroundSettings(
                            "shadow",
                            shadowMap[parseInt(e.target.value)]
                        );
                    }}
                    min={0}
                    max={5}
                />
                <div className="flex items-center justify-between text-xs">
                    <p>NONE</p>
                    <p>SM</p>
                    <p>MD</p>
                    <p>LG</p>
                    <p>XL</p>
                    <p>2XL</p>
                </div>
            </div>
        </div>
    );
}

export function BorderCustomizer() {
    const { background, updateBackgroundSettings } = useIconSettings();
    return (
        <div className="flex flex-col gap-3">
            <p className="text-sm">Background</p>
            <div className="flex items-center justify-center">
                <ChromePicker
                    color={background.backgroundColor}
                    onChange={(e) => {
                        updateBackgroundSettings("backgroundColor", e.hex);
                    }}
                />
            </div>
        </div>
    );
}

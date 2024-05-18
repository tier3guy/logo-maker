import { useState } from "react";
import Slider from "@/components/Slider";
import { useIconSettings } from "@/hooks";
import ColorPicker from "@/components/ColorPicker";

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
    const [shadowName, setShadowName] = useState<string>("NONE");

    const shadowMap: {
        [key: number]: string;
    } = {
        0: "none",
        1: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        2: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        3: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        4: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        5: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    };

    const shadowValueName: {
        [key: number]: string;
    } = {
        0: "NONE",
        1: "SM",
        2: "MD",
        3: "LG",
        4: "XL",
        5: "2XL",
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
                    valueLabel={shadowName}
                    value={shadow}
                    onChange={(e) => {
                        setShadow(parseInt(e.target.value));
                        setShadowName(
                            shadowValueName[parseInt(e.target.value)]
                        );
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
    const { background, updateBackgroundSettings, addChanges } =
        useIconSettings();
    return (
        <div className="flex flex-col gap-3">
            <p className="text-sm">Background</p>
            <div className="flex items-center justify-center">
                <ColorPicker picker="backgroundColor" />
            </div>
        </div>
    );
}

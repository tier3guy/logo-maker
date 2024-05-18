import { Undo2 } from "lucide-react";
import { useIconSettings } from "@/hooks";

const Presets = [
    {
        iconSettings: {
            borderColor: "white",
            fillColor: "transparent",
        },
        backgroundSettings: {
            borderRadius: 0,
            background: "rgba(0,0,0,1)",
        },
    },
    {
        iconSettings: {
            borderColor: "black",
            fillColor: "transparent",
        },
        backgroundSettings: {
            borderRadius: 0,
            background: "#ffeda0",
        },
    },
    {
        iconSettings: {
            borderColor: "black",
            fillColor: "transparent",
        },
        backgroundSettings: {
            borderRadius: 12,
            background: "linear-gradient(45deg, #ef709b 0%, #eca0ff 100%)",
        },
    },
    {
        iconSettings: {
            borderColor: "black",
            fillColor: "transparent",
        },
        backgroundSettings: {
            borderRadius: "50%",
            background: "radial-gradient(circle, #c6f8ff 0%, #a9ff68 100%)",
        },
    },
];

export default function IconsPresets() {
    const { handleReset, icon, updateIconSettings, updateBackgroundSettings } =
        useIconSettings();

    return (
        <div className="flex items-center divide-x-[1px]">
            <div className="px-2">
                <button
                    className="h-10 w-10 grid place-content-center hover:bg-gray-200"
                    onClick={handleReset}
                >
                    <Undo2 />
                </button>
            </div>
            <div className="flex items-center gap-3">
                <p className="ps-2 text-sm text-gray-400">Presets</p>
                <div className="flex items-center gap-2 justify-center">
                    {Presets.map((preset, index) => {
                        return (
                            <button
                                className="h-10 w-10 grid place-content-center"
                                key={index}
                                style={{
                                    background:
                                        preset.backgroundSettings.background,
                                    borderRadius:
                                        preset.backgroundSettings.borderRadius,
                                }}
                                onClick={() => {
                                    updateIconSettings(
                                        "borderColor",
                                        preset.iconSettings.borderColor
                                    );
                                    updateIconSettings(
                                        "fillColor",
                                        preset.iconSettings.fillColor
                                    );
                                    updateBackgroundSettings(
                                        "borderRadius",
                                        preset.backgroundSettings.borderRadius
                                    );
                                    updateBackgroundSettings(
                                        "backgroundColor",
                                        preset.backgroundSettings.background
                                    );
                                }}
                            >
                                {
                                    <icon.icon
                                        style={{
                                            color: preset.iconSettings
                                                .borderColor,
                                        }}
                                    />
                                }
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

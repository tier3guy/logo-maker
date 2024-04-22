"use client";
import { Pencil } from "lucide-react";
import { createContext, useState } from "react";

interface IIcon {
    icon: any;
    size: number;
    rotation: number;
    borderWidth: number;
    borderColor: string;
    fillColor: string;
}

interface IBackground {
    borderRadius: number;
    padding: number;
    shadow: string;
    backgroundColor: string;
}

interface IIconSettings {
    icon: IIcon;
    background: IBackground;
    updateIconSettings: (property: string, value: any) => void;
    updateBackgroundSettings: (property: string, value: any) => void;
}

export const IconSettingsContext = createContext<IIconSettings | undefined>(
    undefined
);

export default function IconSettingsProvider({
    children,
}: {
    children: Readonly<React.ReactNode>;
}) {
    const [iconSettings, setIconSettings] = useState<IIcon>({
        icon: <Pencil />,
        size: 250,
        rotation: 0,
        borderWidth: 2,
        borderColor: "rgba(34,25,77,1)",
        fillColor: "#e9e9e9",
    });
    const [bgSettings, setBgSettings] = useState<IBackground>({
        borderRadius: 115,
        padding: 5,
        shadow: "none",
        backgroundColor: "rgba(175,51,242,1)",
    });

    const updateIconSettings = (property: string, value: any) => {
        setIconSettings((prev) => {
            return { ...prev, [property]: value };
        });
    };
    const updateBackgroundSettings = (property: string, value: any) => {
        setBgSettings((prev) => {
            return { ...prev, [property]: value };
        });
    };

    const value: IIconSettings = {
        icon: iconSettings,
        background: bgSettings,
        updateIconSettings,
        updateBackgroundSettings,
    };

    return (
        <IconSettingsContext.Provider value={value}>
            {children}
        </IconSettingsContext.Provider>
    );
}

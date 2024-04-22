"use client";
import { Pencil } from "lucide-react";
import { createContext, useCallback, useEffect, useState } from "react";

interface IIcon {
    icon: any;
    iconName: string;
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
    handleReset: () => void;
    addChanges: () => void;
}

export const IconSettingsContext = createContext<IIconSettings | undefined>(
    undefined
);

export default function IconSettingsProvider({
    children,
}: {
    children: Readonly<React.ReactNode>;
}) {
    const initialIconSettings: IIcon = {
        icon: Pencil,
        iconName: "Pencil",
        size: 250,
        rotation: 0,
        borderWidth: 2,
        borderColor: "rgba(34,25,77,1)",
        fillColor: "#e9e9e9",
    };
    const initialBackgroundSettings: IBackground = {
        borderRadius: 115,
        padding: 2,
        shadow: "none",
        backgroundColor: "rgba(175,51,242,1)",
    };

    const [changes, setChanges] = useState<
        { icon: IIcon; background: IBackground }[]
    >([
        {
            icon: initialIconSettings,
            background: initialBackgroundSettings,
        },
    ]);

    const [iconSettings, setIconSettings] =
        useState<IIcon>(initialIconSettings);
    const [bgSettings, setBgSettings] = useState<IBackground>(
        initialBackgroundSettings
    );

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

    const addChanges = () => {
        setChanges((prev) => [
            ...prev,
            {
                icon: iconSettings,
                background: bgSettings,
            },
        ]);
    };

    const handleReset = useCallback(() => {
        if (changes.length === 1) return;

        changes.pop();
        const len = changes.length;
        const pastChanges = changes[len - 1];

        setIconSettings(pastChanges?.icon!);
        setBgSettings(pastChanges?.background!);
    }, [changes]);

    useEffect(() => {
        function handleKeyDown(event: any) {
            if (event.ctrlKey && event.key === "z") {
                handleReset();
            }
        }

        // Attach event listener when component mounts
        window.addEventListener("keydown", handleKeyDown);

        // Detach event listener when component unmounts
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleReset]); // Empty dependency array ensures that this effect runs only once, like componentDidMount

    const value: IIconSettings = {
        icon: iconSettings,
        background: bgSettings,
        updateIconSettings,
        updateBackgroundSettings,
        handleReset,
        addChanges,
    };

    return (
        <IconSettingsContext.Provider value={value}>
            {children}
        </IconSettingsContext.Provider>
    );
}

"use client";
import { useIconSettings } from "@/hooks";
import { useEffect, useState } from "react";

export default function LogoViewer() {
    return (
        <section className="h-full md:overflow-hidden relative">
            <div className="absolute inset-0 h-full w-full bg-gray-100 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] grid place-content-center">
                <Logo />
            </div>
        </section>
    );
}

export function Logo() {
    const { icon, background } = useIconSettings();
    const [windowWidth, setWindowWidth] = useState(1000);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    const LOGO_SIZE = windowWidth < 600 ? 300 : 430;

    return (
        <div
            id="__logo__"
            className="border-2 border-gray-400 border-transparent hover:border-dashed hover:border-gray-400 bg-white cursor-pointer grid place-content-center border-t-[1.5px]"
            style={{
                padding: background.padding,
                height: LOGO_SIZE,
                width: LOGO_SIZE,
            }}
        >
            <div
                style={{
                    borderRadius: background.borderRadius,
                    background: background.backgroundColor,
                    height: LOGO_SIZE - background.padding * 2,
                    width: LOGO_SIZE - background.padding * 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: background.shadow,
                }}
            >
                <icon.icon
                    size={icon.size}
                    style={{
                        rotate: icon.rotation + "deg",
                        color: icon.borderColor,
                        fill: icon.fillColor,
                    }}
                    strokeWidth={icon.borderWidth}
                />
            </div>
        </div>
    );
}

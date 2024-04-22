"use client";
import Link from "next/link";
import SidebarButton from "./SidebarButton";
import { Pencil } from "lucide-react";
import Slider from "@/components/Slider";
import { useState } from "react";
import { ChromePicker } from "react-color";

export default function Sidebar() {
    return (
        <section className="h-full overflow-hidden flex divide-x-[1px]">
            <div className="w-2/5 h-full p-2 flex flex-col justify-between">
                <div className="w-full flex flex-col gap-2">
                    <SidebarButton label="Icon" active />
                    <SidebarButton label="Background" />
                </div>
                <div>
                    <p className="text-sm text-gray-400">
                        app by{" "}
                        <Link
                            href="https://www.tier3guy.com"
                            className="text-yellow-500 hover:underline"
                        >
                            @tie3guy
                        </Link>
                    </p>
                </div>
            </div>
            <div className="w-3/5 h-full overflow-y-scroll p-2 flex flex-col gap-4">
                <IconContainer />
                <Customizer />
                <div className="flex flex-col gap-5 mt-4">
                    <BorderCustomizer />
                    <FillCustomizer />
                </div>
            </div>
        </section>
    );
}

export function IconContainer() {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-gray-600">
                <p className="text-sm">Icon</p>
                <p className="text-xs">Pencil</p>
            </div>
            <div>
                <div className="h-12 w-12 grid place-content-center bg-gray-200">
                    <Pencil />
                </div>
            </div>
        </div>
    );
}

export function Customizer() {
    const [size, setSize] = useState<number>(250);
    const [rotation, setRotation] = useState<number>(0);
    const [borderRadius, setBorderRadius] = useState<number>(2);

    return (
        <div className="flex flex-col gap-5">
            <Slider
                label="Size"
                valueLabel={size + "px"}
                value={size}
                onChange={(e) => {
                    setSize(parseInt(e.target.value));
                }}
                min={100}
                max={600}
            />
            <Slider
                label="Rotate"
                valueLabel={rotation + "°"}
                value={rotation}
                onChange={(e) => {
                    setRotation(parseInt(e.target.value));
                }}
                min={-180}
                max={180}
            />
            <Slider
                label="Border Radius"
                valueLabel={borderRadius + "px"}
                value={borderRadius}
                onChange={(e) => {
                    setBorderRadius(parseInt(e.target.value));
                }}
                min={0}
                max={10}
            />
        </div>
    );
}

export function BorderCustomizer() {
    return (
        <div className="flex flex-col gap-3">
            <p className="text-sm">Border Color</p>
            <div className="flex items-center justify-center">
                <ChromePicker />
            </div>
        </div>
    );
}

export function FillCustomizer() {
    return (
        <div className="flex flex-col gap-3">
            <p className="text-sm">Fill Color</p>
            <div className="flex items-center justify-center">
                <ChromePicker />
            </div>
        </div>
    );
}

"use client";
import Link from "next/link";
import SidebarButton from "./SidebarButton";
import IconSetters from "./IconSetters";
import { useState } from "react";
import BackgroundSetters from "./BackgroundSetters";

export default function Sidebar() {
    const [activeTab, setActiveTab] = useState<"ICON" | "BACKGROUND">("ICON");

    return (
        <section className="h-full overflow-hidden flex divide-x-[1px]">
            <div className="w-2/5 h-full p-2 flex flex-col justify-between">
                <div className="w-full flex flex-col gap-2">
                    <SidebarButton
                        label="Icon"
                        active={activeTab === "ICON"}
                        onClick={() => {
                            setActiveTab("ICON");
                        }}
                    />
                    <SidebarButton
                        label="Background"
                        active={activeTab === "BACKGROUND"}
                        onClick={() => {
                            setActiveTab("BACKGROUND");
                        }}
                    />
                </div>
                <Footer />
            </div>
            <div className="w-3/5 h-full overflow-y-scroll p-2">
                {activeTab === "ICON" && <IconSetters />}
                {activeTab === "BACKGROUND" && <BackgroundSetters />}
            </div>
        </section>
    );
}

function Footer() {
    return (
        <div>
            <p className="text-sm text-gray-400">
                app by{" "}
                <Link
                    href="https://www.tier3guy.com"
                    className="text-black hover:underline"
                >
                    @tie3guy
                </Link>
            </p>
        </div>
    );
}

"use client";
import Link from "next/link";
import SidebarButton from "./SidebarButton";
import IconSetters from "./IconSetters";
import { useState } from "react";
import BackgroundSetters from "./BackgroundSetters";

export default function Sidebar() {
    const [activeTab, setActiveTab] = useState<"ICON" | "BACKGROUND">("ICON");

    return (
        <section className="h-full overflow-hidden flex flex-col md:flex-row divide-x-[1px]">
            <div className="md:w-2/5 md:h-full p-2 flex flex-col justify-between border-b-2 border-gray-200 md:border-b-0">
                <div className="w-full flex md:flex-col gap-2">
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
            <div className="h-full overflow-y-scroll p-2">
                {activeTab === "ICON" && <IconSetters />}
                {activeTab === "BACKGROUND" && <BackgroundSetters />}
            </div>
        </section>
    );
}

function Footer() {
    return (
        <div className="hidden md:block">
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

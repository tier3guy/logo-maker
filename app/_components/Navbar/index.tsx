"use client";
import Logo from "@/components/Logo";
import DownloadButton from "./DownloadButton";
import IconsPresets from "./IconsPresets";

export default function Navbar() {
    return (
        <nav className="px-2 *:p-2">
            <div className="flex justify-between items-center relative">
                <Logo />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <IconsPresets />
                </div>
                <DownloadButton />
            </div>
        </nav>
    );
}

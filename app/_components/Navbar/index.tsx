"use client";
import Logo from "@/components/Logo";
import DownloadButton from "./DownloadButton";
import IconsPresets from "./IconsPresets";

export default function Navbar() {
    return (
        <nav>
            <div className="flex justify-between items-center relative px-2 *:p-2">
                <Logo />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
                    <IconsPresets />
                </div>
                <DownloadButton />
            </div>
            <div className="block md:hidden border-y-[1.5px] py-2">
                <IconsPresets />
            </div>
        </nav>
    );
}

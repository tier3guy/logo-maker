import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { TooltipProvider, Tooltip } from "@/components/ui/tooltip";
import IconSettingsProvider from "@/providers/IconSettingsProvider";
import { Dialog } from "@/components/ui/dialog";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "LogoMaker",
    description:
        "LogoMaker is a versatile online tool designed to empower individuals and businesses in creating stunning logos effortlessly.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={spaceGrotesk.className}>
                <IconSettingsProvider>
                    <TooltipProvider>
                        <Dialog>
                            <Tooltip>{children}</Tooltip>
                        </Dialog>
                    </TooltipProvider>
                </IconSettingsProvider>
            </body>
        </html>
    );
}

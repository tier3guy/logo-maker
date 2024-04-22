import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import ReduxProvider from "@/redux/provider";

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
                <ReduxProvider>
                    <TooltipProvider>{children}</TooltipProvider>
                </ReduxProvider>
            </body>
        </html>
    );
}

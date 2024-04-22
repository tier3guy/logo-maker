import LogoMakerBoard from "./_components/LogoMakerBoard";
import Navbar from "./_components/Navbar";

export default function Home() {
    return (
        <main className="flex flex-col divide-y-[1px] h-screen w-screen overflow-hidden">
            <Navbar />
            <div className="flex-1 overflow-hidden w-full h-full">
                <LogoMakerBoard />
            </div>
        </main>
    );
}

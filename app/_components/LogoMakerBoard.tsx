import LogoViewer from "./LogoViewer";
import Sidebar from "./Sidebar";

export default function LogoMakerBoard() {
    return (
        <section className="h-full overflow-hidden flex divide-x-[1px]">
            <div className="w-[40%] h-full">
                <Sidebar />
            </div>
            <div className="w-[60%] h-full z-40">
                <LogoViewer />
            </div>
        </section>
    );
}

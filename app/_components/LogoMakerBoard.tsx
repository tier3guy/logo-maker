import LogoViewer from "./LogoViewer";
import Sidebar from "./Sidebar";

export default function LogoMakerBoard() {
    return (
        <section className="h-full overflow-y-scroll  md:overflow-hidden flex flex-col md:flex-row divide-x-[1px]">
            <div className="w-full md:w-[40%] h-[35vh] md:h-full">
                <Sidebar />
            </div>
            <div className="w-full md:w-[60%] h-full z-40">
                <LogoViewer />
            </div>
        </section>
    );
}

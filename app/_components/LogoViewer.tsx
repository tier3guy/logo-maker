export default function LogoViewer() {
    return (
        <section className="h-full overflow-hidden relative">
            <div className="absolute inset-0 h-full w-full bg-gray-100 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] grid place-content-center opacity-50">
                <div className="h-[420px] w-[420px] bg-gray-200 border-2 border-gray-400 border-dashed cursor-pointer"></div>
            </div>
        </section>
    );
}

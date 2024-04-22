interface ISlider {
    label: string;
    value: number;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    valueLabel?: string;
    min?: number;
    max?: number;
}

export default function Slider({
    label,
    value,
    onChange,
    valueLabel = "",
    min = 0,
    max = 100,
}: ISlider) {
    return (
        <div className="flex flex-col gap-1">
            <div className="flex items-center text-gray-600 justify-between">
                <p className="text-sm">{label}</p>
                <p className="text-xs">{valueLabel}</p>
            </div>
            <input
                min={min}
                max={max}
                type="range"
                value={value}
                onChange={onChange}
                className="p-1 range w-full bg-slate-800 appearance-none cursor-pointer dark:bg-gray-700"
            />
        </div>
    );
}

import { DialogClose } from "@/components/ui/dialog";
import ICON_KEYS from "@/lib/icons";
import Icon from "./Icon";

export default function IconSelectorDialog() {
    return (
        <div className="flex flex-col gap-2 h-[90vh]">
            <h3 className="text-md font-medium">Pick an Icon</h3>
            <div className="grid grid-cols-6 gap-4 flex-1 overflow-y-scroll mt-4">
                {ICON_KEYS.map((iconName, index) => {
                    return (
                        <DialogClose key={iconName}>
                            <Icon name={iconName as any} />
                        </DialogClose>
                    );
                })}
            </div>
        </div>
    );
}

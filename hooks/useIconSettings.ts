import { useContext } from "react";
import { IconSettingsContext } from "@/providers/IconSettingsProvider";

const useIconSettings = () => {
    const context = useContext(IconSettingsContext);
    if (!context)
        throw new Error(
            "useIconSettings can only be used inside IconSettingsProvider"
        );
    return context;
};

export default useIconSettings;

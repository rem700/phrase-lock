import { useState } from "react";

export const useTooltip = () => {
    const [tooltip, setTooltip] = useState({
        visible: false,
        x: 0,
        y: 0,
        text: "",
    });

    const showTooltip = (x, y, text) => {
        const offsetX = 10;
        const offsetY = 10;
        setTooltip({
            visible: true,
            x: x + offsetX,
            y: y + offsetY,
            text,
        });

        setTimeout(() => {
            setTooltip({
                visible: false,
                x: 0,
                y: 0,
                text: "",
            });
        }, 1000);
    };

    return { tooltip, showTooltip };
};

import { useTooltip } from "./useTooltip"; 

export const useCopyToClipboard = () => {
    const { tooltip, showTooltip } = useTooltip(); 

    const copyToClipboard = (text, e) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                const { clientX, clientY } = e; 
                showTooltip(clientX, clientY, "Copied to clipboard!"); 
            })
            .catch(() => {
                const { clientX, clientY } = e;
                showTooltip(clientX, clientY, "Failed to copy!");
            });
    };

    const showHoverTooltip = (e) => {
        const { clientX, clientY } = e;
        showTooltip(clientX, clientY, "Click to copy"); 
    };

    const hideTooltip = () => {
        showTooltip(0, 0, ""); 
    };

    return { copyToClipboard, tooltip, showHoverTooltip, hideTooltip }; 
};

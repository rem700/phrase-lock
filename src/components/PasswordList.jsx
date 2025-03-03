import { useCopyToClipboard } from "../hooks/useCopyToClipboard"; 
import PasswordItem from "./PasswordItem";
import Tooltip from "./Tooltip";

const PasswordList = ({ passwords }) => {
    const { copyToClipboard, tooltip, showHoverTooltip, hideTooltip } = useCopyToClipboard(); 
    return (
        <div>
            <div className="password-list">
            {passwords.map((password, index) => (
                    <PasswordItem
                        key={index}
                        password={password}
                        copyToClipboard={copyToClipboard}
                        showHoverTooltip={showHoverTooltip}
                        hideTooltip={hideTooltip}
                    />
                ))}
            </div>

            
            <Tooltip
                visible={tooltip.visible}
                x={tooltip.x}
                y={tooltip.y}
                text={tooltip.text}
            />
        </div>
    );
};

export default PasswordList;
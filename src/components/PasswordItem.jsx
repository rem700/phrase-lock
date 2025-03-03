import CopyButton from "./CopyButton";
import "../styles/PasswordItem.css";

const PasswordItem = ({ password, copyToClipboard, showHoverTooltip, hideTooltip }) => {
    return (
        <div className="password-item">
            <span>{password}</span>
            <CopyButton
                password={password}
                copyToClipboard={copyToClipboard}
                showHoverTooltip={showHoverTooltip}
                hideTooltip={hideTooltip}
            />
        </div>
    );
};

export default PasswordItem;

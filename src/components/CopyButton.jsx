import Copy from "../media/copy-32.png";
import "../styles/CopyButton.css";

const CopyButton = ({ password, copyToClipboard, showHoverTooltip, hideTooltip }) => {
    return (
        <button
            className="copy-button"
            onClick={(e) => copyToClipboard(password, e)} 
            onMouseEnter={showHoverTooltip} 
            onMouseLeave={hideTooltip} 
        >
            <img src={Copy} alt="Copy Password" />
        </button>
    );
};

export default CopyButton;

import "../styles/Tooltip.css";

const Tooltip = ({ visible, x, y, text }) => {
    if (!visible) return null;

    return (
        <div
            className="tooltip visible"
            style={{
                top: `${y}px`,
                left: `${x}px`,
            }}
        >
            {text}
        </div>
    );
};


export default Tooltip;

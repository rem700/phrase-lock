import "../styles/GenerateButton.css";

export default function GenerateButton({ generatePasswords }) {
    return (
        <button
            className="generate-button"
            onClick={generatePasswords}
        >
            Generate Passwords
        </button>
    )
}

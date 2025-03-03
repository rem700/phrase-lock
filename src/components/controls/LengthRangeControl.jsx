const LengthRangeControl = ({length, handleSetLength}) => {
    return (
        <label>
            Password length:
            <input
                type="range"
                min="6"
                max="20"
                value={length}
                onChange={(e) => handleSetLength(Number(e.target.value))}
            />
            <span>{length}</span>
        </label>
    )
}

export default LengthRangeControl;
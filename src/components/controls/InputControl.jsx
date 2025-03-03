const InputControl = ({label, type, value, checked, handleChange}) => {
    return (
        <label>
            <input
                type={type}
                checked={checked}
                value={value}
                onChange={handleChange}
            />
            {label}
        </label>
    )
}

export default InputControl;
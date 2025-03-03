const CHAR_SETS = {
    numbers: "0123456789",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    special: "!@#$%^&*()_+[]{}|;:,.<>?/~`",
};

export const getCharSet = (categories) =>
    Object.entries(CHAR_SETS)
        .filter(([key]) => categories[key])
        .map(([, value]) => value)
        .join("");

export default CHAR_SETS;

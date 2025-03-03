const shuffleString = (str) => {
    return str
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
};

export default shuffleString;
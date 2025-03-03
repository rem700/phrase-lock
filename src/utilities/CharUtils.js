export const getRandomChar = (charSet) =>
    charSet.charAt(Math.floor(Math.random() * charSet.length));

export const getRandomCharByType = (type, charSet) => {
    const regex = type === "letter" ? /[A-Za-z]/g : type === "number" ? /\d/g : /./g;
    const filteredChars = charSet.match(regex);
    return filteredChars ? getRandomChar(filteredChars.join("")) : "";
};

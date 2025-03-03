import shuffleString from "./shuffleString";

export const insertRandomSymbols = (phrase, charSet) => {
    const words = phrase.split(" ");
    const result = [];

    for (let i = 0; i < words.length; i++) {
        result.push(words[i]);

        if (i < words.length - 1 && charSet.length > 0) {
            result.push(charSet.charAt(Math.floor(Math.random() * charSet.length)));
        }
    }

    return result.join("");
};

export const formatKeyPhrase = (phrase, charSet, maxLength, shuffle) => {
    if (!phrase) return "";

    let formattedPhrase = insertRandomSymbols(phrase, charSet);

    if (formattedPhrase.length > maxLength) {
        formattedPhrase = formattedPhrase.slice(0, maxLength).trim();
    }

    return shuffle ? shuffleString(formattedPhrase) : formattedPhrase;
};

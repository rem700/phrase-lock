import { getCharSet } from "../utilities/CharSets";
import { getRandomChar, getRandomCharByType } from "../utilities/CharUtils";
import { formatKeyPhrase } from "../utilities/KeyPhraseUtils";

const generatePassword = (length, charSet, firstSymbol, phrase, shufflePhrase) => {
    let password = firstSymbol !== "any" ? getRandomCharByType(firstSymbol, charSet) : "";

    const formattedPhrase = phrase
        ? formatKeyPhrase(phrase, charSet, length - password.length, shufflePhrase)
        : "";

    while (password.length + formattedPhrase.length < length) {
        password += getRandomChar(charSet);
    }

    if (formattedPhrase) {
        const insertIndex = Math.floor(Math.random() * (password.length - 1)) + 1; 
        password = password.slice(0, insertIndex) + formattedPhrase + password.slice(insertIndex);
    }

    return password.slice(0, length); 
};

const generatePasswords = (length, categories, firstSymbol, count = 10) => {
    const charSet = getCharSet(categories);
    if (!charSet) throw new Error("No valid character sets selected.");

    return Array.from({ length: count }, () =>
        generatePassword(
            length,
            charSet,
            firstSymbol,
            categories.additionalSymbols,
            categories.shufflePhrase
        )
    );
};

const PasswordService = { generatePasswords };

export default PasswordService;




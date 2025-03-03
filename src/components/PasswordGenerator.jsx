import { useState } from "react";
import PasswordList from "./PasswordList";
import PasswordService from "../services/PasswordService";
import LengthRangeControl from "./controls/LengthRangeControl";
import InputControl from "./controls/InputControl";
import KeyPhraseControl from "./controls/KeyPhraseControl";
import GenerateButton from "./GenerateButton";
import "../styles/PasswordGenerator.css";


const categoryOptions = [
    { key: "numbers", label: "Numbers" },
    { key: "uppercase", label: "Uppercase" },
    { key: "lowercase", label: "Lowercase" },
    { key: "special", label: "Special Characters" },
    { key: "phrase", label: "Key Phrase" },
];

const PasswordGenerator = () => {
    const [length, setLength] = useState(12);
    const [categories, setCategories] = useState({
        numbers: true,
        uppercase: true,
        lowercase: true,
        special: true,
        phrase: true,
        shufflePhrase: false,
        additionalSymbols: "",
    });
    const [firstSymbol, setFirstSymbol] = useState("any");
    const [passwords, setPasswords] = useState([]);

    const generatePasswords = () => {
        const newPasswords = PasswordService.generatePasswords(
            length,
            categories,
            firstSymbol
        );
        setPasswords(newPasswords);
    };

    const handleCategoryChange = (field, value) => {
        setCategories((prevCategories) => ({
            ...prevCategories,
            [field]: value
        }));
    };

    return (
        <div className="password-generator">
            <div className="controls">
                <LengthRangeControl length={length} handleSetLength={setLength} />

                <div className="categories">
                    {categoryOptions.map(({ key, label }) => (
                        <InputControl key={key} label={label} type="checkbox" checked={categories[key]} handleChange={(e) => handleCategoryChange(key, e.target.checked)} />
                    ))}

                    {categories.phrase && (
                        <KeyPhraseControl
                            categories={categories}
                            handleCategoryChange={handleCategoryChange}
                        />
                    )}
                </div>

                <label>First Symbol</label>
                <div className="first-symbol">
                    <InputControl
                        label="Any"
                        type="radio"
                        value="any"
                        checked={firstSymbol === "any"}
                        handleChange={() => setFirstSymbol("any")}
                    />
                    <InputControl
                        label="Letter"
                        type="radio"
                        value="letter"
                        checked={firstSymbol === "letter"}
                        handleChange={() => setFirstSymbol("letter")}
                    />
                    <InputControl
                        label="Number"
                        type="radio"
                        value="number"
                        checked={firstSymbol === "number"}
                        handleChange={() => setFirstSymbol("number")}
                    />
                </div>
                <GenerateButton generatePasswords={generatePasswords}/>
            </div>

            <PasswordList passwords={passwords} />

        </div>
    );
};

export default PasswordGenerator;

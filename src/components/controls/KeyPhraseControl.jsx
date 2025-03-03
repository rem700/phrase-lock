import { Fragment } from "react";

const KeyPhraseControl = ({ categories, handleCategoryChange }) => {
    return (
        <Fragment>
            <label className="key-phrase">
                Enter your key-phrase:
                <textarea
                    value={categories.additionalSymbols}
                    onChange={(e) =>
                        handleCategoryChange("additionalSymbols", e.target.value)
                    }
                />
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={categories.shufflePhrase}
                    onChange={(e) =>
                        handleCategoryChange("shufflePhrase", e.target.checked)
                    }
                />
                Shuffle key phrase
            </label>
        </Fragment>
    );
};

export default KeyPhraseControl;

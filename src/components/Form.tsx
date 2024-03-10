import React, { useState } from "react";

interface FormProps {
    lbl: string;
    type: string;
    onSubmit: (value: string) => void;
}

const Form: React.FC<FormProps> = ({ lbl, type, onSubmit }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        if (inputValue.trim() === "") {
            return;
        }
        onSubmit(inputValue);
        setInputValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>{lbl}</label>
            <input
                type={type}
                value={inputValue}
                onChange={(elem) => setInputValue(elem.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;

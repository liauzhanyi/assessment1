import React from "react";

interface FormProps {
    lbl: string;
    type: string;
}

const Form: React.FC<FormProps> = ({ lbl, type }) => {
    return (
        <form>
            <label>{lbl}</label>
            <input type={type} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;

import React from "react";

interface DisplayTableProps {
    lbl: string;
    items: string[];
}

const DisplayTable: React.FC<DisplayTableProps> = ({ lbl, items }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>{lbl}</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, index) => (
                    <tr key={index}>
                        <td>{item}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DisplayTable;

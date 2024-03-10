import { useState } from "react";
import Form from "./components/Form";
import DisplayTable from "./components/DisplayTable";

function App() {
    const [authors, setAuthors] = useState([]);

    const addAuthor = (author) => {
        setAuthors((prevAuthors) => [...prevAuthors, author]);
    };

    return (
        <>
            <Form lbl="author name" type="text" onSubmit={addAuthor} />
            <DisplayTable lbl="Author Names Submitted" items={authors} />
        </>
    );
}

export default App;

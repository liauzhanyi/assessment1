import { useState, useEffect } from "react";
import Form from "./components/Form";
import DisplayTable from "./components/DisplayTable";
import "./App.css";

function App() {
    const [authors, setAuthors] = useState<string[]>([]);
    const [users, setUsers] = useState<string[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) =>
                setUsers(data.map((user: { name: string }) => user.name))
            );
    }, []);

    const addAuthor = (author: string) => {
        setAuthors((prevAuthors: string[]) => [...prevAuthors, author]);
    };

    return (
        <>
            <div className="main-container">
                <div className="form-authors-container">
                    <Form lbl="author name" type="text" onSubmit={addAuthor} />
                    <DisplayTable
                        lbl="Author Names Submitted"
                        items={authors}
                    />
                </div>
                <div className="api-users">
                    <DisplayTable lbl="List of Users" items={users} />
                </div>
            </div>
        </>
    );
}

export default App;

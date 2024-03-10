import Form from "./components/Form";
import DisplayTable from "./components/DisplayTable";

function App() {
    return (
        <>
            <Form lbl="author name" type="text" />
            <DisplayTable
                lbl="Author Names Submitted"
                items={["test1", "test2"]}
            />
        </>
    );
}

export default App;

import { useEffect, useState } from "react";
import axios from 'axios';

function Form() {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/data")
            .then((res) => {
                setTodos(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/data", { text })
            .then((res) => {
                setTodos([...todos, res.data]);
                setText(""); // Clear the input field after submission
                console.log("Response: " + res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter ToDo here..."
                />
                <button type="submit">ADD</button>
            </form>
            <div className="todo_list">
                {todos.map((todo, i) => (
                    <span>
                    <h4 key={i}>{todo.title}</h4>
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Form;

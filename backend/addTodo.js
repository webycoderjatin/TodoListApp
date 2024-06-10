import Todo from "./models/todoModel";
import { useState, useEffect } from "react"

export default function add() {

    const [text, setText] = useState();
    useEffect(() => {
        axios.get("http://localhost:3000/data")
            .then((res) => {
                setText(res)
                console.log(res.data)
            })
            .catch(err => {
                console.log("Error : ", err);
            })
    }, []);

    const newTodo = new Todo({
        title: text.data
    })

    newTodo.save()
        .then(() => console.log('Todo saved!'))
        .catch(err => console.error('Error saving todo:', err));
}

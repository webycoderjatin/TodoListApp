const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const mongoose = require('mongoose');
const Todo = require('./models/todoModel');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


let dataStore = [];

mongoose.connect("mongodb://localhost:27017/todo")
  .then(() => console.log("MongoDB connected successfully!"))
  .catch(err => console.log(err))

// Route to handle form submission
app.post('/data', async (req, res) => {
  try {
    const { text } = req.body;
    const newTodo = new Todo({
      title: text,
    });
    await newTodo.save()
      .then(() => console.log("Todo added"))
      .catch((err) => console.log("error :", err))
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.get('/data', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

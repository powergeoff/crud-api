const Todo = require("../models/todo");

const getTodos = (req, res) => {
    Todo.find((err, todos) => {
      if (err) {
        res.send(err);
      }
      res.json(todos);
    });
  };

const getTodoById = (req, res) => {
    const id = req.params.id;
    Todo.findById(id, (err, todo) => {
        if (err) {
            res.send(err);
        }
        res.json(todo);
    });
}

const createTodo = (req, res) => {
    console.dir(req.body)
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
    });

    todo.save((err, todo) => {
        if (err) {
        res.send(err);
        }
        res.json(todo);
    });
};

const updateToDo = (req, res) => {
    Todo.findOneAndUpdate(
        { _id: req.params.id },
        {
            $set: {
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed,
            },
        },
        { new: true },
        (err, Todo) => {
            if (err) {
            res.send(err);
            } else res.json(Todo);
        }
    );
};

const deleteTodo = (req, res) => {
    Todo.deleteOne({ _id: req.params.id })
      .then(() => res.json({ message: "Todo Deleted" }))
      .catch((err) => res.send(err));
};
  
module.exports = {
    getTodos,
    createTodo,
    getTodoById,
    updateToDo,
    deleteTodo
};
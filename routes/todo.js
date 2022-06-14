const toDoRouter = require("express").Router();
const { getTodos, createTodo, getTodoById, updateToDo, deleteTodo } = require("../controllers/todo");

toDoRouter.get("/todos", getTodos);
toDoRouter.get("/todos/:id", getTodoById);
toDoRouter.post("/todos", createTodo);
toDoRouter.put("/todos/:id", updateToDo);
toDoRouter.delete("/todos/:id", deleteTodo);

module.exports = toDoRouter;
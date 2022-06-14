//https://medium.com/geekculture/building-a-crud-api-with-node-js-and-mongodb-72be82aaec53

const express = require("express");
const homeRouter = require("express").Router();
const toDoRouter = require("./routes/todo");
const mongoose = require("mongoose");
const cors = require("cors");

const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(homeRouter);
app.use(toDoRouter);
homeRouter.get("/", (req, res) => {
  res.send("HOME - Let's build a CRUD API!");
});


app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});

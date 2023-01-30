const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const { errorHandler } = require("./middleware/errors");
const port = process.env.PORT;

const snippetRouter = require("./routes/snippetRoutes");
const userRouter = require("./routes/userRoutes");
const commentRouter = require("./routes/commentRoutes");

//Initialize app
const app = express();

//Connect db
const mongoDB = "mongodb://localhost:27017/testdb";
mongoose.connect(mongoDB);
mongoose.Promise = Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

//Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Define routes
app.use("/api/snippets", snippetRouter);
app.use("/api/users", userRouter);
app.use("/api/comments", commentRouter);

//Use custom error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

console.log("Event marketplace app is running");

const express = require("express");
const mongoose = require("mongoose");

const internalRouter = require("./routes/internalRoutes");
const hireItemRouter = require("./routes/hireItemRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = 3000;



app.use(express.json());

app.use("/internal", internalRouter);
app.use("/hireItems", hireItemRouter);
app.use("/user", userRouter);

app.listen(port, () =>
  console.log(`event app is listening at http://localhost:${port}"`)
);

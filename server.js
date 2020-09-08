//create express server

const express = require("express");

const mongoose = require("mongoose");

const app = express();

const PORT = 3000;

app.use(express.static("public"));

//mongoose

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

//seed



//routes

app.use(require("./routes/view"));

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});

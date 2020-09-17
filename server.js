//create express server

const express = require("express");

const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

//mongoose

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

//seed

app.use(require("./routes/api"));

//routes

app.use(require("./routes/view"));

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});

//create express server

const express = require("express");

const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//mongoose
const uriKey = process.env.uri;
mongoose.connect(
  uriKey,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

//seed

app.use(require("./routes/api"));

//routes

app.use(require("./routes/view"));

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});


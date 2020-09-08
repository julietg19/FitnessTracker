//create express server

const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.static("public"));

//routes

app.use(require("./routes/view"));

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});

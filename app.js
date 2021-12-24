const express = require("express");
const app = express();
const router = require("./routes/main");
const notFound = require("./middlewares/not-found");
const errorHandler = require("./middlewares/errorHandler");
require("dotenv").config();
require("express-async-error");

app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1", router);

app.use(notFound);
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`running on ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start()
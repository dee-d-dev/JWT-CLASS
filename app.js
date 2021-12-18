const express = require("express");
const app = express();
const router = require("./routes/index");
const notFound = require("./middlewares/not-found");
require('dotenv')
require('express-async-error')

app.use(express.json());
app.use("/api/v1", router);

app.use(notFound);

app.listen(5000, () => {
  console.log("running on 5k");
});

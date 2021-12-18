const express = require("express");
const app = express();
const router = express.Router();

router.get("/dashboard", (req, res) => {
  res.send("Welcome to the dahboard");
});

module.exports = router;

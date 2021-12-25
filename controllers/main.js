const CustomAPIError = require("../errors/custom-error");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomAPIError(
      "Please provide username and password, ABeg!",
      400
    );
  }

  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET);
  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello User`,
    secret: `you're authorized, here is your lucky number ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };

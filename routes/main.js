const express = require("express");
const app = express();
const router = express.Router();
const { login, dashboard } = require("../controllers/main");

router.get("/dashboard", dashboard);
router.post("/login", login);

module.exports = router;

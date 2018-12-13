const router = require("express").Router();
const user = require("./user");

// User routes
router.use("/user", user);

module.exports = router;

const express = require("express");
const getDefaulter = require("../Controller/paymentController");
const router = express.Router();

// app.set("view engine", "pug");
// app.set("views", path.join(__dirname, "views"));
router.get("/defaulterlist", getDefaulter.handler);

module.exports = router;

const router = require("express").Router();

const { recruit } = require("../models/index.js");

router.post("/add", (req, res) => {
  console.log(req.body);
});

module.exports = router;

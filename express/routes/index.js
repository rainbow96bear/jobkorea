const router = require("express").Router();

const companyuser = require("./companyuser.js");

router.use("/companyuser", companyuser);

module.exports = router;

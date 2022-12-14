const router = require("express").Router();

const companyuser = require("./companyuser.js");
const individualuser = require("./individualuser.js");

router.use("/companyuser", companyuser);
router.use("/individualuser", individualuser);

module.exports = router;
